var REG_NONE = NewRegistrar("none");
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");

// Meta settings for individual records.
var CF_PROXY_OFF = {"cloudflare_proxy": "off"};     // Proxy disabled.
var CF_PROXY_ON = {"cloudflare_proxy": "on"};       // Proxy enabled.
var CF_PROXY_FULL = {"cloudflare_proxy": "full"};   // Proxy+Railgun enabled.
// Per-domain meta settings:
// Proxy default off for entire domain (the default):
var CF_PROXY_DEFAULT_OFF = {"cloudflare_proxy_default": "off"};
// Proxy default on for entire domain:
var CF_PROXY_DEFAULT_ON = {"cloudflare_proxy_default": "on"};
// UniversalSSL off for entire domain:
var CF_UNIVERSALSSL_OFF = { cloudflare_universalssl: "off" };
// UniversalSSL on for entire domain:
var CF_UNIVERSALSSL_ON = { cloudflare_universalssl: "on" };

DEFAULTS(
    DnsProvider(DSP_CLOUDFLARE, 0),
    DefaultTTL("1"),
    CF_PROXY_DEFAULT_OFF
);

D("fede.host", REG_NONE,
    IGNORE("@", "MX"),
    IGNORE("@", "TXT"),
    IGNORE("cf2024-1._domainkey", "TXT"),

    // Management cluster
    A("rancher", "129.159.194.8", CF_PROXY_ON),
    A("argo", "129.159.194.8", CF_PROXY_ON),

    // MZNT Home Cluster
    A("home1.mznt", "10.10.1.2"),
    A("*.home1.mznt", "10.10.1.2"),
    A("hui.home1.mznt", "10.10.0.10"), // harvester ui
    A("api-int.home1.mznt", "10.10.0.12"), // kube-api internal
    A("upsd-local.home1.mznt", "10.10.1.3"),

    // MZNT Svit Cluster
    A("svit.mznt", "10.10.11.2"),
    A("*.svit.mznt", "10.10.11.2"),
    A("hui.svit.mznt", "10.10.10.2"), // harvester ui
    A("api-int.svit.mznt", "10.10.10.2"), // kube-api internal
    // A("api.home1.mznt", "88.212.34.116"),
);