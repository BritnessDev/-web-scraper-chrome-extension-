import * as browser from 'webextension-polyfill';

export default class Config {
	constructor() {
		this.sitemapDb = '<use loadConfiguration()>';
		this.dataDb = '<use loadConfiguration()>';
		this.restUrl = '<use loadConfiguration()>';
		this.talismanApiUrl = '<use loadConfiguration()>';
		this.locale = '<use loadConfiguration()>';
		this.credential = '<use loadConfiguration()>';
		this.defaults = {
			storageType: 'local',
			// this is where sitemap documents are stored
			sitemapDb: 'scraper-sitemaps',
			// this is where scraped data is stored.
			// empty for local storage
			dataDb: '',
			restUrl: '',
			talismanApiUrl: '',
			locale: 'en',
			credential: '',
		};
	}

	/**
	 * Loads configuration from chrome extension sync storage
	 */
	loadConfiguration(callback) {
		return new Promise(resolve => {
			browser.storage.sync
				.get([
					'sitemapDb',
					'dataDb',
					'storageType',
					'restUrl',
					'talismanApiUrl',
					'locale',
					'credential',
				])
				.then(
					function (items) {
						this.storageType = items.storageType || this.defaults.storageType;
						this.locale = items.locale || this.defaults.locale;
						this.sitemapDb = this.defaults.sitemapDb;
						this.dataDb = this.defaults.dataDb;
						this.restUrl = this.defaults.restUrl;
						this.talismanApiUrl = this.defaults.talismanApiUrl;
						this.credential = this.defaults.credential;

						if (this.storageType === 'couchdb') {
							this.sitemapDb = items.sitemapDb || this.defaults.sitemapDb;
							this.dataDb = items.dataDb || this.defaults.dataDb;
						} else if (this.storageType === 'rest') {
							this.restUrl = items.restUrl || this.defaults.restUrl;
						} else if (this.storageType === 'talisman') {
							this.talismanApiUrl =
								items.talismanApiUrl || this.defaults.talismanApiUrl;
							this.credential = items.credential || this.defaults.credential;
						}
						resolve();
					}.bind(this)
				);
		});
	}

	/**
	 * Saves configuration to chrome extension sync storage
	 * @param {{sitemapDb: string, restUrl: string, credential: string, storageType: string, dataDb: string, talismanApiUrl: string}} items
	 * @returns {Promise<void>} Promise
	 */
	updateConfiguration(items) {
		return browser.storage.sync.set(items);
	}
}
