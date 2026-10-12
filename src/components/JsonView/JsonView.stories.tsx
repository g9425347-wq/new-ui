import { Meta, StoryObj } from "@storybook/react";
import { JsonView, JsonViewProps } from "./JsonView";

const meta: Meta = {
	title: "Components/JsonView",
	component: JsonView,
};

export default meta;

/* Abridged copy of an attack-path payload - steps 1, 8 and 9 of 9 are kept so
   the story still exercises deep nesting, long strings, MITRE links and the
   large impacted-bucket array. */
const attackPath = {
	customerUid: "AF",
	summary:
		"igw-99f150e2 → 609579005174-cloudtraillogs-us-east-1 (ruleS3Full)",
	details:
		"Internet traffic reaches an active Internet Gateway that is attached to a VPC, forming the entry point for public-facing workloads. → The Internet Gateway is attached to a VPC, extending the public attack surface into the VPC network boundary. → A route table within the VPC contains a default route (0.0.0.0/0) pointing to the attached Internet Gateway, enabling outbound and return inbound internet traffic. → A subnet is associated with a route table that has a default route to the Internet Gateway, classifying the subnet as public and internet-reachable. → A Network ACL associated with the public subnet allows inbound traffic from the internet (0.0.0.0/0) on SSH (22) and RDP (3389), providing no subnet-level port restriction for exposed instances. → A security group with inbound rules allowing 0.0.0.0/0 on SSH (22) and RDP (3389) is attached to the EC2 instance, permitting unrestricted administrative access from the internet. → The security group permits inbound traffic from the internet (0.0.0.0/0) on exposed ports, and the EC2 instance has a public IPv4 address, completing the internet-reachable attack path. → Compromised EC2 can use attached IAM role credentials → IAM role can full access S3 data",
	raisedDateTime: "2026-09-29T11:38:17.999Z",
	sourceReference: "80ccc6da-899d-488b-831f-7ed6a63b7a54",
	environmentScanUid: "AF-AP-23",
	confirmed: true,
	statusUid: null,
	priorityUid: "CRITICAL",
	destinationRisk:
		"All objects stored in the publicly accessible S3 bucket; Sensitive files, backups, logs, and credentials stored in the bucket",
	riskScore: 90,
	globalRiskScore: 84,
	riskLevelUid: "CRITICAL",
	pathLength: 9,
	entryPointAssetUid: "us-east-1:Internet Gateway:igw-99f150e2",
	destinationAssetUid:
		"us-east-1:S3 Bucket:609579005174-cloudtraillogs-us-east-1",
	steps: [
		{
			stepNumber: 1,
			assetUid: "us-east-1:Internet Gateway:igw-99f150e2",
			region: "us-east-1",
			misconfiguration: null,
			listOfBucketsImpacted: [],
			listOfTablesImpacted: [],
			listOfQueuesImpacted: [],
			listOfContainersImpacted: [],
			bucketImpactDetails: [],
			description:
				"Internet traffic reaches an active Internet Gateway that is attached to a VPC, forming the entry point for public-facing workloads.",
			dataAtRisk: [
				"VPC perimeter and all resources reachable through the attached Internet Gateway",
			],
			relationship: "EXPOSED_TO",
			mitreTacticId: "TA0001",
			mitreTactic: "Initial Access",
			mitreTacticsDetailed: [
				{
					tacticId: "TA0001",
					tacticName: "Initial Access",
					description:
						"The adversary is trying to get into your network. Initial Access consists of techniques that use various entry vectors to gain their initial foothold within a network. Techniques used for Initial Access include targeted phishing campaigns, exploiting public-facing web applications, and using exposed services with default credentials.",
					relevance: null,
					url: "https://attack.mitre.org/tactics/TA0001/",
				},
			],
			mitreTechniqueId: "T1190, T1133",
			mitreTechniquesDetailed: [
				{
					techniqueId: "T1190",
					techniqueName: "Exploit Public-Facing Application",
					description:
						"Adversaries may attempt to exploit a weakness in an Internet-facing host or system to initially access a network. The weakness in the system can be a software bug, a temporary glitch, or a misconfiguration such as exposed management interfaces or unauthenticated APIs.",
					subTechniques: [],
					relevance: null,
					mitigations: [],
					url: "https://attack.mitre.org/techniques/T1190/",
				},
				{
					techniqueId: "T1133",
					techniqueName: "External Remote Services",
					description:
						"Adversaries may leverage external-facing remote services to initially access and/or persist within a network. Remote services such as VPNs, Citrix, and other access mechanisms allow users to connect to internal enterprise network resources from external locations.",
					subTechniques: [],
					relevance: null,
					mitigations: [],
					url: "https://attack.mitre.org/techniques/T1133/",
				},
			],
			remediation: {
				summary:
					"Audit and restrict Internet Gateway attachments, confirm that only intentionally public subnets route through the IGW, and remove exposed resources that do not require direct internet connectivity.",
				steps: [
					{
						order: 1,
						title: "Internet Gateway attachment review",
						description:
							"Audit all Internet Gateways in the account and verify that each one is intentionally attached to a VPC. Detach and delete Internet Gateways that are not needed. (https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)",
					},
					{
						order: 2,
						title: "VPC public exposure assessment",
						description:
							"Review the VPC architecture to understand which subnets are public and which resources are reachable from the internet. Move all other workloads to private subnets behind NAT or VPC endpoints. (https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html)",
					},
				],
				estimatedImpact: null,
			},
		},
		{
			stepNumber: 8,
			assetUid: "global:IAM Role:AROAY33N5OT3M7EB3B3CK",
			region: "global",
			misconfiguration: null,
			listOfBucketsImpacted: [],
			listOfTablesImpacted: [],
			listOfQueuesImpacted: [],
			listOfContainersImpacted: [],
			bucketImpactDetails: [],
			description: "Compromised EC2 can use attached IAM role credentials",
			dataAtRisk: [
				"S3 objects readable by the assumed role across all permitted buckets",
				"IAM role credentials obtainable via the EC2 instance metadata service",
				"Any AWS resource the role has permissions to access",
			],
			relationship: "ASSUMES",
			mitreTacticId: "TA0004, TA0008",
			mitreTactic: "Privilege Escalation",
			mitreTacticsDetailed: [
				{
					tacticId: "TA0004",
					tacticName: "Privilege Escalation",
					description:
						"The adversary is trying to gain higher-level permissions.",
					relevance: null,
					url: "https://attack.mitre.org/tactics/TA0004/",
				},
				{
					tacticId: "TA0008",
					tacticName: "Lateral Movement",
					description:
						"The adversary is trying to move through your environment.",
					relevance: null,
					url: "https://attack.mitre.org/tactics/TA0008/",
				},
			],
			mitreTechniqueId: "T1078.004, T1550.001",
			mitreTechniquesDetailed: [
				{
					techniqueId: "T1078.004",
					techniqueName: "Valid Accounts",
					description:
						"Adversaries may obtain and abuse credentials of a cloud account as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.",
					subTechniques: [],
					relevance: null,
					mitigations: [],
					url: "https://attack.mitre.org/techniques/T1078/004/",
				},
			],
			remediation: {
				summary:
					"Apply least-privilege to the IAM role attached to this EC2 instance by scoping permissions to specific S3 buckets and actions, removing wildcards, and validating the policy with IAM Access Analyzer.",
				steps: [
					{
						order: 1,
						title: "Review IAM role attached to EC2 instance",
						description:
							"Inspect the IAM role assigned to this EC2 instance's instance profile and identify permissions broader than the workload requires.",
					},
				],
				estimatedImpact: null,
			},
		},
		{
			stepNumber: 9,
			assetUid:
				"us-east-1:S3 Bucket:609579005174-cloudtraillogs-us-east-1",
			region: "us-east-1",
			misconfiguration: null,
			listOfBucketsImpacted: [
				"609579005174-cloudtraillogs-us-east-1",
				"aihistorystore",
				"alertfusion-es-s3-backups",
				"app.crisnm.com",
				"app.fidelioai.com",
				"app.stack.io",
				"asset-discovery-bucket",
				"aws-athena-query-results-609579005174-us-east-1",
				"awsbedrockllama2804",
				"canuminfotech",
				"crisnm-org-dev",
				"crisnm-org-ind",
				"crisnm-org-ldn",
				"crisnm-prod",
				"crisnm-sys-dev",
				"crisnm-sys-prd",
				"crisnm.com",
				"crisnum-india-storage",
				"crisnum-london-storage",
				"crisnum-prod-storage",
				"crisnum-storage",
				"dev.crisnm.com",
				"ec2fullaccess",
				"elasticbeanstalk-ap-south-1-609579005174",
				"elasticbeanstalk-eu-west-2-609579005174",
				"elasticbeanstalk-us-east-1-609579005174",
				"elasticsearch-migration-bucket111",
				"fidelioai.com",
				"inspector-reports-60957",
				"secgeniehistory",
				"secintelhistory",
				"test-s3rajeev",
				"xml-vul-s3",
			],
			listOfTablesImpacted: [],
			listOfQueuesImpacted: [],
			listOfContainersImpacted: [],
			bucketImpactDetails: [],
			description: "IAM role can full access S3 data",
			dataAtRisk: [
				"All objects stored in the publicly accessible S3 bucket",
				"Sensitive files, backups, logs, and credentials stored in the bucket",
			],
			relationship: null,
			mitreTacticId: "TA0009, TA0010, TA0040",
			mitreTactic: "Collection",
			mitreTacticsDetailed: [
				{
					tacticId: "TA0009",
					tacticName: "Collection",
					description:
						"The adversary is trying to gather data of interest to their goal.",
					relevance: null,
					url: "https://attack.mitre.org/tactics/TA0009/",
				},
				{
					tacticId: "TA0010",
					tacticName: "Exfiltration",
					description: "The adversary is trying to steal data.",
					relevance: null,
					url: "https://attack.mitre.org/tactics/TA0010/",
				},
			],
			mitreTechniqueId: "T1530",
			mitreTechniquesDetailed: [
				{
					techniqueId: "T1530",
					techniqueName: "Data from Cloud Storage",
					description:
						"Adversaries may access data from improperly secured cloud storage. Many cloud service providers offer solutions for online data storage such as Amazon S3, Azure Storage, and Google Cloud Storage.",
					subTechniques: [],
					relevance: null,
					mitigations: [],
					url: "https://attack.mitre.org/techniques/T1530/",
				},
			],
			remediation: {
				summary:
					"Replace wildcard S3 permissions on this role with explicit bucket ARNs and minimum required actions, tighten bucket policies, and enable Object Lock on sensitive buckets.",
				steps: [
					{
						order: 1,
						title: "Restrict IAM role S3 permissions to specific bucket ARNs",
						description:
							"Update the IAM policies attached to this role to replace wildcard resource ARNs (arn:aws:s3:::*) with explicit ARNs for only the buckets the EC2 workload requires.",
					},
					{
						order: 2,
						title: "Enable S3 Object Lock / versioning for tamper protection",
						description:
							"Enable S3 Versioning on sensitive buckets to preserve object history and enable recovery from accidental or malicious deletion. (https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)",
					},
				],
				estimatedImpact: null,
			},
		},
	],
};

export const Default: StoryObj<JsonViewProps> = (args: JsonViewProps) => (
	<JsonView {...args} />
);
Default.args = {
	data: attackPath,
	rootName: "attackPath",
};

/* The same payload arriving as a raw JSON string from an API response */
export const FromJsonString: StoryObj<JsonViewProps> = (args: JsonViewProps) => (
	<JsonView {...args} />
);
FromJsonString.args = {
	data: JSON.stringify(attackPath),
	rootName: "response",
};

export const ExpandedThreeLevels: StoryObj<JsonViewProps> = (
	args: JsonViewProps,
) => <JsonView {...args} />;
ExpandedThreeLevels.args = {
	data: attackPath,
	rootName: "attackPath",
	defaultExpandLevel: 3,
	maxHeight: 640,
};

export const WithDataTypes: StoryObj<JsonViewProps> = (args: JsonViewProps) => (
	<JsonView {...args} />
);
WithDataTypes.args = {
	data: attackPath.steps[0],
	rootName: "step",
	defaultExpandLevel: 2,
	showDataTypes: true,
};

export const ReadOnlyNoToolbar: StoryObj<JsonViewProps> = (
	args: JsonViewProps,
) => <JsonView {...args} />;
ReadOnlyNoToolbar.args = {
	data: {
		customerUid: attackPath.customerUid,
		priorityUid: attackPath.priorityUid,
		riskScore: attackPath.riskScore,
		confirmed: attackPath.confirmed,
		statusUid: attackPath.statusUid,
		entryPointAssetUid: attackPath.entryPointAssetUid,
	},
	rootName: "summary",
	showToolbar: false,
	defaultExpandLevel: 2,
	maxHeight: 260,
};

export const SmallArray: StoryObj<JsonViewProps> = (args: JsonViewProps) => (
	<JsonView {...args} />
);
SmallArray.args = {
	data: attackPath.steps[2].listOfBucketsImpacted,
	rootName: "listOfBucketsImpacted",
	defaultExpandLevel: 1,
};

export const InvalidJson: StoryObj<JsonViewProps> = (args: JsonViewProps) => (
	<JsonView {...args} />
);
InvalidJson.args = {
	data: '{"customerUid": "AF", "riskScore": }',
};
