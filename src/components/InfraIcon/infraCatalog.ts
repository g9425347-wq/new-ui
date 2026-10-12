import { infraIconBody } from "./infraIconPaths";

/**
 * The attack-path icon catalogue.
 *
 * Asset *shape* (what the thing is) and platform *scope* (where it runs) are
 * kept as two independent axes. A renderer joins them at draw time, so the
 * four platforms multiply across the components without anyone maintaining
 * redundant combinations.
 */

export type InfraCategory =
	| "compute"
	| "network"
	| "identity"
	| "messaging"
	| "storage_data";

export interface InfraComponent {
	id: string;
	label: string;
	iconKey: string;
	/** Filled in by the catalogue so a lookup result carries its own group. */
	category: InfraCategory;
}

export interface InfraPlatform {
	id: string;
	label: string;
	badgeText: string;
	themeColor: string;
}

export const INFRA_ICON_SET = "attack-path-enterprise-complete";

const COMPUTE: Omit<InfraComponent, "category">[] = [
	{
		id: "physical_server",
		label: "Bare Metal / Compute Host",
		iconKey: "Server",
	},
	{
		id: "virtual_machine",
		label: "Virtual Machine Instance",
		iconKey: "Cpu",
	},
	{ id: "container", label: "Container / Kubernetes Pod", iconKey: "Boxes" },
	{
		id: "container_registry",
		label: "Container Registry (ECR / ACR / GAR)",
		iconKey: "FolderArchive",
	},
	{
		id: "serverless",
		label: "Serverless Function (Lambda / Functions)",
		iconKey: "Zap",
	},
	{
		id: "user_endpoint",
		label: "Corporate Workstation / Laptop",
		iconKey: "Laptop",
	},
	{
		id: "mobile_device",
		label: "Mobile Managed Endpoint",
		iconKey: "Smartphone",
	},
	{
		id: "iot_device",
		label: "Industrial IoT / Edge Node",
		iconKey: "Spline",
	},
];

const NETWORK: Omit<InfraComponent, "category">[] = [
	{ id: "router", label: "Core Layer-3 Router", iconKey: "Route" },
	{ id: "switch", label: "Layer-2 Network Switch", iconKey: "Network" },
	{ id: "firewall", label: "Next-Gen Network Firewall", iconKey: "Wall" },
	{ id: "gateway", label: "API Gateway / NAT Gateway", iconKey: "DoorOpen" },
	{
		id: "load_balancer",
		label: "Application Load Balancer",
		iconKey: "GitFork",
	},
	{
		id: "vpn_tunnel",
		label: "IPSec VPN Tunnel / DirectConnect",
		iconKey: "Link2",
	},
	{
		id: "wireless_ap",
		label: "Corporate Wireless Access Point",
		iconKey: "Wifi",
	},
	{
		id: "internet",
		label: "Public WAN / Untrusted Internet",
		iconKey: "Globe",
	},
	{
		id: "internet_gateway",
		label: "Internet Gateway (IGW)",
		iconKey: "DoorOpen",
	},
	{
		id: "virtual_network",
		label: "Virtual Network (VPC / VNet)",
		iconKey: "Cloud",
	},
	{ id: "subnet", label: "Subnet", iconKey: "Grid2x2" },
	{ id: "route_table", label: "Route Table", iconKey: "Signpost" },
	{ id: "network_acl", label: "Network ACL", iconKey: "ListChecks" },
	{ id: "security_group", label: "Security Group", iconKey: "ShieldCheck" },
	{ id: "public_ip", label: "Public IP Address", iconKey: "Globe" },
];

const IDENTITY: Omit<InfraComponent, "category">[] = [
	{ id: "iam_role", label: "IAM Role", iconKey: "KeyRound" },
	{ id: "iam_user", label: "IAM User / Identity", iconKey: "UserRound" },
	{ id: "iam_policy", label: "IAM Policy", iconKey: "ScrollText" },
];

const MESSAGING: Omit<InfraComponent, "category">[] = [
	{
		id: "message_queue",
		label: "Message Queue (SQS / Service Bus)",
		iconKey: "Inbox",
	},
	{
		id: "notification_topic",
		label: "Notification Topic (SNS / Pub-Sub)",
		iconKey: "Megaphone",
	},
];

const STORAGE_DATA: Omit<InfraComponent, "category">[] = [
	{
		id: "relational_db",
		label: "Relational Database Instance (SQL)",
		iconKey: "Database",
	},
	{
		id: "nosql_db",
		label: "NoSQL / Key-Value Cache Store",
		iconKey: "TableProperties",
	},
	{
		id: "search_cluster",
		label: "Search & Analytics Cluster (Elasticsearch / OpenSearch)",
		iconKey: "SearchCode",
	},
	{
		id: "object_storage",
		label: "Object Cloud Storage (S3 / Blob)",
		iconKey: "HardDriveDownload",
	},
	{
		id: "nas_storage",
		label: "Network Attached Storage (NAS / NFS File Share)",
		iconKey: "FolderNetwork",
	},
	{
		id: "san_storage",
		label: "Storage Area Network (SAN / Block Storage)",
		iconKey: "Layers",
	},
];

const withCategory = (
	items: Omit<InfraComponent, "category">[],
	category: InfraCategory,
): InfraComponent[] => items.map((item) => ({ ...item, category }));

export const INFRA_COMPONENTS: Record<InfraCategory, InfraComponent[]> = {
	compute: withCategory(COMPUTE, "compute"),
	network: withCategory(NETWORK, "network"),
	identity: withCategory(IDENTITY, "identity"),
	messaging: withCategory(MESSAGING, "messaging"),
	storage_data: withCategory(STORAGE_DATA, "storage_data"),
};

export const INFRA_PLATFORMS: InfraPlatform[] = [
	{
		id: "aws",
		label: "Amazon Web Services",
		badgeText: "AWS",
		themeColor: "#FF9900",
	},
	{
		id: "azure",
		label: "Microsoft Azure",
		badgeText: "AZ",
		themeColor: "#0089D6",
	},
	{
		id: "gcp",
		label: "Google Cloud Platform",
		badgeText: "GCP",
		themeColor: "#4285F4",
	},
	{
		id: "on_prem",
		label: "On-Premises Corporate DC",
		badgeText: "DC",
		themeColor: "#4A5568",
	},
];

/** Every component flattened, in catalogue order. */
export const ALL_INFRA_COMPONENTS: InfraComponent[] = [
	...INFRA_COMPONENTS.compute,
	...INFRA_COMPONENTS.network,
	...INFRA_COMPONENTS.identity,
	...INFRA_COMPONENTS.messaging,
	...INFRA_COMPONENTS.storage_data,
];

/** Colour used when a node names no platform, matching the on-prem neutral. */
export const DEFAULT_PLATFORM_COLOR = "#4A5568";

const normalise = (value: string): string =>
	value
		.trim()
		.toLowerCase()
		.replace(/[\s\-.]+/g, "_");

const COMPONENT_ALIASES: Record<string, string[]> = {
	physical_server: [
		"server",
		"host",
		"bare_metal",
		"baremetal",
		"compute",
		"physical",
	],
	virtual_machine: ["vm", "ec2", "instance", "compute_instance"],
	container: ["pod", "kubernetes", "k8s", "docker", "containers"],
	container_registry: ["registry", "ecr", "acr", "gar", "image_registry"],
	serverless: ["lambda", "function", "functions", "faas", "cloud_function"],
	user_endpoint: ["workstation", "laptop", "desktop", "endpoint", "pc"],
	mobile_device: ["mobile", "phone", "tablet", "ios", "android"],
	iot_device: ["iot", "ot", "edge", "sensor", "ics", "scada"],
	router: ["routing", "layer3", "l3"],
	switch: ["layer2", "l2", "switching"],
	firewall: ["fw", "ngfw", "waf", "network_firewall"],
	gateway: ["api_gateway", "nat", "nat_gateway", "proxy"],
	load_balancer: ["lb", "alb", "nlb", "elb", "balancer"],
	vpn_tunnel: ["vpn", "tunnel", "ipsec", "directconnect", "expressroute"],
	wireless_ap: ["wifi", "wireless", "access_point", "ap", "wlan"],
	internet: ["wan", "public", "external", "untrusted", "public_internet"],
	internet_gateway: ["igw", "internet_gw"],
	virtual_network: [
		"vpc",
		"vnet",
		"virtual_private_cloud",
		"network_boundary",
		"network",
	],
	subnet: ["vpc_subnet", "subnets", "cidr_block"],
	route_table: ["rtb", "routetable", "route_tables"],
	network_acl: ["nacl", "acl", "subnet_acl"],
	security_group: [
		"sg",
		"ec2_security_group",
		"nsg",
		"network_security_group",
	],
	public_ip: [
		"elastic_ip",
		"eip",
		"public_ip_addr",
		"public_ip_address",
		"public_ipv4",
	],
	iam_role: ["role", "assumed_role", "service_role", "instance_profile"],
	iam_user: [
		"iam_identity",
		"identity",
		"principal",
		"service_account",
		"user",
	],
	iam_policy: ["policy", "iam_policies", "permission_policy"],
	message_queue: [
		"sqs",
		"sqs_queue",
		"queue",
		"service_bus",
		"rabbitmq",
		"kafka_topic",
	],
	notification_topic: [
		"sns",
		"sns_topic",
		"topic",
		"pub_sub",
		"pubsub",
		"event_bus",
	],
	relational_db: [
		"database",
		"db",
		"sql",
		"rds",
		"postgres",
		"mysql",
		"oracle",
	],
	nosql_db: ["nosql", "dynamodb", "redis", "cache", "mongodb", "key_value"],
	search_cluster: [
		"elasticsearch",
		"opensearch",
		"search",
		"analytics_cluster",
		"solr",
	],
	object_storage: ["s3", "blob", "bucket", "object", "gcs"],
	nas_storage: ["nas", "nfs", "file_share", "smb", "efs"],
	san_storage: ["san", "block_storage", "ebs", "volume", "disk"],
};

const PLATFORM_ALIASES: Record<string, string[]> = {
	aws: ["amazon", "amazon_web_services", "ec2_platform"],
	azure: ["az", "microsoft", "microsoft_azure"],
	gcp: ["google", "google_cloud", "google_cloud_platform"],
	on_prem: [
		"onprem",
		"on_premise",
		"on_premises",
		"datacenter",
		"data_center",
		"dc",
		"corporate",
	],
};

function buildIndex<T extends { id: string; label: string }>(
	items: T[],
	aliases: Record<string, string[]>,
): Map<string, T> {
	const index = new Map<string, T>();

	// Pass 1: Canonical IDs and labels take absolute precedence
	items.forEach((item) => {
		index.set(normalise(item.id), item);
		index.set(normalise(item.label), item);
	});

	// Pass 2: Aliases populate only if unassigned
	items.forEach((item) => {
		const itemAliases = aliases[item.id] ?? [];
		itemAliases.forEach((alias) => {
			const k = normalise(alias);
			if (!index.has(k)) {
				index.set(k, item);
			}
		});
	});

	return index;
}

const COMPONENT_INDEX = buildIndex(ALL_INFRA_COMPONENTS, COMPONENT_ALIASES);
const PLATFORM_INDEX = buildIndex(INFRA_PLATFORMS, PLATFORM_ALIASES);

/**
 * Look a component up by id, label, or any known alias.
 *
 * Checks exact match first. If not found, attempts compound word lookups
 * and prefix/suffix heuristics.
 */
export function findInfraComponent(
	assetType?: string | null,
): InfraComponent | undefined {
	if (!assetType) return undefined;

	const key = normalise(assetType);
	const exact = COMPONENT_INDEX.get(key);
	if (exact) return exact;

	const words = key.split("_").filter(Boolean);
	if (words.length < 2) return undefined;

	// Check longer contiguous sub-phrases first if available
	for (let i = 0; i < words.length - 1; i++) {
		const subPhrase = `${words[i]}_${words[i + 1]}`;
		const match = COMPONENT_INDEX.get(subPhrase);
		if (match) return match;
	}

	// Fall back to specific service prefix, then suffix
	return (
		COMPONENT_INDEX.get(words[0]) ??
		COMPONENT_INDEX.get(words[words.length - 1])
	);
}

/** Look a platform up by id, label, badge text, or any known alias. */
export function findInfraPlatform(
	platform?: string | null,
): InfraPlatform | undefined {
	if (!platform) return undefined;
	return PLATFORM_INDEX.get(normalise(platform));
}

export interface ResolvedInfraNode {
	iconKey: string;
	label: string;
	category?: InfraCategory;
	platformBadge?: string;
	platformColor: string;
	platformLabel?: string;
}

/**
 * Join the two axes into everything a renderer needs. An unrecognised asset
 * type still resolves to the fallback glyph and the raw string as its label.
 */
export function resolveInfraNode(
	assetType?: string | null,
	platform?: string | null,
): ResolvedInfraNode {
	const component = findInfraComponent(assetType);
	const scope = findInfraPlatform(platform);
	return {
		iconKey: component?.iconKey ?? "Activity",
		label: component?.label ?? (assetType || "Unknown Asset"),
		category: component?.category,
		platformBadge: scope?.badgeText,
		platformColor: scope?.themeColor ?? DEFAULT_PLATFORM_COLOR,
		platformLabel: scope?.label,
	};
}

/** Standalone SVG markup for an icon — the form a canvas or `img` needs. */
export function infraIconSvg(
	iconKey: string,
	color = "currentColor",
	size = 24,
): string {
	return (
		`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" ` +
		`fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` +
		infraIconBody(iconKey) +
		"</svg>"
	);
}

/**
 * The same SVG as a data URI. Percent-encoded rather than base64 so the payload
 * stays readable in devtools and avoids `btoa` dependency server-side.
 */
export function infraIconDataUri(
	iconKey: string,
	color = "#ffffff",
	size = 24,
): string {
	return `data:image/svg+xml;utf8,${encodeURIComponent(
		infraIconSvg(iconKey, color, size),
	)}`;
}

const escapeXml = (value: string): string =>
	value.replace(
		/[<>&"']/g,
		(ch) =>
			({
				"<": "&lt;",
				">": "&gt;",
				"&": "&amp;",
				'"': "&quot;",
				"'": "&apos;",
			}[ch]!),
	);

/**
 * A composite data URI carrying the glyph *and* its platform badge in one image.
 * Dynamically scales the badge pill width based on text length to prevent clipping.
 */
export function infraNodeDataUri(
	iconKey: string,
	iconColor: string,
	badgeText?: string,
	badgeColor: string = DEFAULT_PLATFORM_COLOR,
): string {
	if (!badgeText) return infraIconDataUri(iconKey, iconColor, 24);

	const safeBadgeText = escapeXml(badgeText.toUpperCase());
	const badgeWidth = Math.max(20, safeBadgeText.length * 6 + 6);
	const badgeX = 44 - badgeWidth;
	const textX = badgeX + badgeWidth / 2;

	const svg =
		'<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">' +
		`<g transform="translate(10 14)" stroke="${iconColor}" stroke-width="2" ` +
		'stroke-linecap="round" stroke-linejoin="round">' +
		infraIconBody(iconKey) +
		"</g>" +
		`<rect x="${badgeX}" y="0" width="${badgeWidth}" height="12" rx="3" fill="${badgeColor}"/>` +
		`<text x="${textX}" y="9" text-anchor="middle" ` +
		"font-family=\"Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\" " +
		`font-size="9" font-weight="700" fill="#ffffff">${safeBadgeText}</text>` +
		"</svg>";

	return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
