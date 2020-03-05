(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{415:function(t,e,_){"use strict";_.r(e);var v=_(7),i=Object(v.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"environment-variables"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables","aria-hidden":"true"}},[t._v("#")]),t._v(" Environment Variables")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Enviroment Variable")]),t._v(" "),_("th",{staticStyle:{"text-align":"right"}},[t._v("Description")]),t._v(" "),_("th",[t._v("Default Value")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("MONGO_URI")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("URI to connect to MongoDB.")]),t._v(" "),_("td",[_("code",[t._v("mongodb://localhost/growi")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("NO_CDN")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("If "),_("code",[t._v("true")]),t._v(", system doesn't use CDN, all resources will be downloaded from CDN when build client, and served by the GROWI Express server.")]),t._v(" "),_("td",[_("code",[t._v("false")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("ELASTICSEARCH_URI")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("URI to connect to Elasticearch.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("REDIS_URI")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("URI to connect to Redis (use it as a session store instead of MongoDB).")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("PASSWORD_SEED")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("A password seed used by password hash generator.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SECRET_TOKEN")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("A secret key for verifying the integrity of signed cookies.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SESSION_NAME")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("The name of the session ID cookie to set in the response by Express.")]),t._v(" "),_("td",[_("code",[t._v("connect.sid")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("If "),_("code",[t._v("true")]),t._v(", the system uses only the value of the environment variable as the value of the SAML option that can be set via the environment variable.")]),t._v(" "),_("td",[_("code",[t._v("false")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("FORCE_WIKI_MODE")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Forces wiki mode.")]),t._v(" "),_("td",[_("code",[t._v("undefined")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v(": "),_("code",[t._v("undefined")]),t._v(" Publicity will be configured by the admin security page settings")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v(": "),_("code",[t._v("public")]),t._v(" Forces all pages to become public")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v(": "),_("code",[t._v("private")]),t._v(" Forces all pages to become private")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("FORMAT_NODE_LOG")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("If "),_("code",[t._v("false")]),t._v(", Output server log as JSON. (Enabled only when "),_("code",[t._v("NODE_ENV=production")]),t._v(")")]),t._v(" "),_("td",[_("code",[t._v("true")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("MATHJAX")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("(TBD)")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("USER_UPPER_LIMIT")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("(TBD)")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Option for file uploading")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}}),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("FILE_UPLOAD")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Attached files storage.")]),t._v(" "),_("td",[_("code",[t._v("aws")])])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v(": "),_("code",[t._v("aws")]),t._v(" Amazon Web Service S3 (needs AWS settings on Admin page)")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v(": "),_("code",[t._v("gcs")]),t._v(" Google Cloud Storage (needs settings with environment variables)")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v(": "),_("code",[t._v("mongodb")]),t._v(" MongoDB GridFS (Setting-less)")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v(": "),_("code",[t._v("local")]),t._v(" Server's Local file system (Setting-less)")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v(": "),_("code",[t._v("none")]),t._v(" Disable file uploading")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("FILE_UPLOAD_DISABLED")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("If "),_("code",[t._v("true")]),t._v(", file uploading will be disabled. However, the files can be still viewed.")]),t._v(" "),_("td",[_("code",[t._v("false")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("MAX_FILE_SIZE")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("The maximum file size limit for uploads (bytes).")]),t._v(" "),_("td",[_("code",[t._v("Infinity")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("FILE_UPLOAD_TOTAL_LIMIT")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Total capacity limit for uploads (bytes).")]),t._v(" "),_("td",[_("code",[t._v("Infinity")])])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("GCS_API_KEY_JSON_PATH")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Path of the JSON file that contains "),_("a",{attrs:{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("service account key to authenticate to GCP API"),_("OutboundLink")],1)]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("GCS_BUCKET")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Name of the GCS bucket")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("GCS_UPLOAD_NAMESPACE")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Directory name to create in the bucket")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Option to integrate with external systems")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}}),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("HACKMD_URI")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("URI to connect to "),_("a",{attrs:{href:"https://hackmd.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HackMD(CodiMD)"),_("OutboundLink")],1),t._v(" server.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("This server must load the GROWI agent. "),_("router-link",{attrs:{to:"/en/admin-guide/admin-cookbook/integrate-with-hackmd.html"}},[t._v("Here's how to prepare it")]),t._v(".")],1),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("HACKMD_URI_FOR_SERVER")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("URI to connect to "),_("a",{attrs:{href:"https://hackmd.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HackMD(CodiMD)"),_("OutboundLink")],1),t._v(" server from GROWI Express server. If not set, "),_("code",[t._v("HACKMD_URI")]),t._v(" will be used.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("PLANTUML_URI")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("URI to connect to "),_("a",{attrs:{href:"http://plantuml.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PlantUML"),_("OutboundLink")],1),t._v(" server.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("BLOCKDIAG_URI")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("URI to connect to "),_("a",{attrs:{href:"http://http://blockdiag.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("blockdiag"),_("OutboundLink")],1),t._v(" server.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("strong",[t._v("Option (Overwritable in admin page)")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}}),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("APP_SITE_URL")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Site URL. e.g. "),_("code",[t._v("https://example.com")]),t._v(", "),_("code",[t._v("https://example.com:8080")])]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("LOCAL_STRATEGY_ENABLED")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Enable or disable ID/Pass login")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("LOCAL_STRATEGY_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Prioritize env vars than values in DB for some ID/Pass login options")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_ENABLED")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Enable or disable SAML")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Prioritize env vars than values in DB for some SAML options")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_ENTRY_POINT")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("IdP entry point")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_ISSUER")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Issuer string to supply to IdP")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_ATTR_MAPPING_ID")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Attribute map for id")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_ATTR_MAPPING_USERNAME")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Attribute map for username")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_ATTR_MAPPING_MAIL")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Attribute map for email")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_ATTR_MAPPING_FIRST_NAME")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Attribute map for first name")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_ATTR_MAPPING_LAST_NAME")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Attribute map for last name")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SAML_CERT")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("PEM-encoded X.509 signing certificate string to validate the response from IdP")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("OAUTH_GOOGLE_CLIENT_ID")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Google API client id for OAuth login.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("OAUTH_GOOGLE_CLIENT_SECRET")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Google API client secret for OAuth login.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("OAUTH_GITHUB_CLIENT_ID")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("GitHub API client id for OAuth login.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("OAUTH_GITHUB_CLIENT_SECRET")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("GitHub API client secret for OAuth login.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("OAUTH_TWITTER_CONSUMER_KEY")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Twitter consumer key(API key) for OAuth login.")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("OAUTH_TWITTER_CONSUMER_SECRET")])]),t._v(" "),_("td",{staticStyle:{"text-align":"right"}},[t._v("Twitter consumer secret(API secret) for OAuth login.")]),t._v(" "),_("td")])])])])},[],!1,null,null,null);e.default=i.exports}}]);