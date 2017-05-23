# Web Scraper
Web Scraper is a chrome browser extension built for data extraction from web 
pages. Using this extension you can create a plan (sitemap) how a web site 
should be traversed and what should be extracted. Using these sitemaps the 
Web Scraper will navigate the site accordingly and extract all data. Scraped 
data later can be exported as CSV.

#### Chrome Store Version
You can find a version of this extension in the [Chrome store][chrome-store]. Please compare the Chrome store version with the version history in this readme to find out which features are supported.

#### Latest Version
To run the latest version you need to download the project to your system and [follow the description on Google][get-started-chrome]) (select the `extension` folder).

### Features

 1. Scrape multiple pages
 2. Sitemaps and scraped data are stored in browsers local storage or in CouchDB
 3. Multiple data selection types
 4. Extract data from dynamic pages (JavaScript+AJAX)
 5. Browse scraped data
 6. Export scraped data as CSV
 7. Import, Export sitemaps
 8. Depends only on Chrome browser
 
#### Bugs
When submitting a bug please attach an exported sitemap if possible.

## License
LGPLv3

## Changelog

### v0.3
 * Added image improvements to find images in div background (by [@jwillmer](https://github.com/jwillmer))
 * Added support for vertical tables (by [@jwillmer](https://github.com/jwillmer))
 * Added random delay function between requests (by [@Euphorbium](https://github.com/Euphorbium))
 * Start URL can now also be a local URL (by [@3flex](https://github.com/3flex))
 * Added CSV export options (by [@mohamnag](https://github.com/mohamnag))
 * Added Regex group for select (by [@RuneHL](https://github.com/RuneHL))
 * JSON export/import of settings (by [@haisi](https://github.com/haisi))
 * Added date and number pattern in URL (by [@codoff](https://github.com/codoff))
 * Added pagination selector limit (by [@codoff](https://github.com/codoff))
 * Improved CSV export (by [@haisi](https://github.com/haisi))
 * Added click limit option (by [@panna-ahmed](https://github.com/panna-ahmed))

### v0.2
 * Added Element click selector
 * Added Element scroll down selector
 * Added Link popup selector
 * Improved table selector to work with any html markup
 * Added Image download
 * Added keyboard shortcuts when selecting elements
 * Added configurable delay before using selector
 * Added configurable delay between page visiting
 * Added multiple start url configuration
 * Added form field validation
 * Fixed a lot of bugs

### v0.1.3
 * Added Table selector
 * Added HTML selector
 * Added HTML attribute selector
 * Added data preview
 * Added ranged start urls
 * Fixed bug which made selector tree not to show on some operating systems

 [chrome-store]: https://chrome.google.com/webstore/detail/web-scraper/jnhgnonknehpejjnehehllkliplmbmhn
 [webscraper.io]: http://webscraper.io/
 [google-groups]: https://groups.google.com/forum/#!forum/web-scraper
 [github-issues]: https://github.com/martinsbalodis/web-scraper-chrome-extension/issues
 [get-started-chrome]: https://developer.chrome.com/extensions/getstarted#unpacked
