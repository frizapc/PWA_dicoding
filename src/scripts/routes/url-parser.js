const UrlParser = {
  urlParserCombiner() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  urlParserNonCombiner() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split("/");
    return {
      resource: urlsSplits[0] || null,
      id: urlsSplits[1] || null,
      verb: urlsSplits[2] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (
      (splitedUrl.resource ? `/${splitedUrl.resource}` : "/") +
      (splitedUrl.id ? "/:id" : "") +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : "")
    );
  },
};

export default UrlParser;
