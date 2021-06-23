import { LightningElement } from 'lwc';

export default class Home extends LightningElement {
	settings = {};
	OAuthData = {};

	connectedCallback() {
		fetch("/settings")
			.then(response => response.json())
			.then(data => {
				this._switchTab();
				this.settings = data;
			})
			.catch(err => {
				console.error(err);
				alert(`Error retriving settings: ${JSON.stringify(err)}`);
			})
	}

	onSettingsChanged(event) {
		this.settings = event.detail;
	}

	onResults(event) {
		this.OAuthData = event.detail;
		if (this.OAuthData.data.id_token) {
			let IdToken = this.OAuthData.data.id_token;
			let strOpenID = atob(IdToken.split(".")[1]);
			let OpenID = JSON.parse(strOpenID);
			this.OAuthData.OpenID = OpenID;
			this.OAuthData.strOpenID = this._getText(OpenID);
		} else {
			this.OAuthData.OpenID = null;
		}
		this.OAuthData.strData = this._getText(this.OAuthData.data);
		console.log(this.OAuthData);
		this._switchTab("Results");
	}

	_switchTab(page) {
		if (!page) {
			let url = window.location;
			let params = new URLSearchParams(url.search);
			if (params.has("page")) {
				page = params.get("page");
			}
		}
		if (page) {
			let pageFound = -1;
			let tabs = Array.from(this.template.querySelectorAll("c-tab"));
			tabs.forEach((tab, index) => {
				if (tab.label === page) {
					pageFound = index;
				}
			});
			if (pageFound >= 0) {
				let tabset = this.template.querySelector("c-tabset");
				tabset.showTab(pageFound);
			}
		}
	}

	_getText(data) {
		// debugger;
		// let output = [];
		// let str = JSON.stringify(data, null, 2);
		// let pieces = str.split("\n");
		// pieces.forEach(piece => {
		//     output.push(...piece.match(/.{1,50}/g));
		// })
		// output = output.join("\n");
		// return output;
		return JSON.stringify(data, null, 2);
	}
}
