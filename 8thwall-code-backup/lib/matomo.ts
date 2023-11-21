declare var React: any;
declare var ReactRouterDOM: any;
const { useLocation, useParams } = ReactRouterDOM;
const { useEffect } = React

function initMatomo() {
	// if(!getCookiesAllowed) {
	//     console.log("cookies disabled")
	//     return;
	// }
	var _paq = ((window as any)._paq = (window as any)._paq || []);
	/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
	_paq.push(["trackPageView"]);
	_paq.push(["enableLinkTracking"]);
	(function () {
		var u = "https://fast.matomo.cloud/";
		_paq.push(["setTrackerUrl", u + "matomo.php"]);
		_paq.push(["setSiteId", "5"]);
		var d = document,
			g = d.createElement("script"),
			s = d.getElementsByTagName("script")[0];
		g.type = "text/javascript";
		g.async = true;
		g.src = "//cdn.matomo.cloud/fast.matomo.cloud/matomo.js";
		s.parentNode.insertBefore(g, s);
	})();
}

// function setCookiesAllowed(isAllowed) {
//     if(!isAllowed){
//         _paq.push(['disableCookies'])
//         return;
//     }
//     localStorage.setItem("cookies", true)
// }

// function getCookiesAllowed() {
//     return localStorage.getItem("cookies")
// }

function usePageViews() {
	if (!(window as any)._paq) {
		return;
	}
	let location = useLocation();
	const { arId } = useParams();
	useEffect(() => {
		(window as any)._paq.push(["setCustomUrl", "/" + arId]);
		(window as any)._paq.push(["setDocumentTitle", arId]);
		(window as any)._paq.push(["trackPageView"]);
	}, [location]);
}


export { initMatomo, usePageViews /* getCookiesAllowed, setCookiesAllowed */ };
