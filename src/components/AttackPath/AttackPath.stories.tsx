import { Meta, StoryObj } from '@storybook/react';
import { AttackPath } from './AttackPath';

const meta: Meta = {
    title: 'Components/AttackPath',
    component: AttackPath,
};

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
    {
        stepNumber: 1,
        assetUid: 'SECGENIE-API-GATEWAY',
        assetDescription: 'Gateway routing requests to backend APIs',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'HIGH',
        exposureLevel: 'High',
        assetTypeUid: 'NETWORK',
        assetType: 'Network',
        riskScore: 9.1,
        vulnerabilityUids: ['CVE-2023-9901', 'CVE-2023-4412'],
        vulnerabilities: [
            { uid: 'CVE-2023-9901', statusUid: 'OPEN' },
            { uid: 'CVE-2023-4412', statusUid: 'CLOSED' },
        ],
        action: [
            'Perform network reconnaissance on gateway endpoints',
            'Identify unpatched API endpoints',
            'Send malicious payloads to trigger vulnerabilities',
        ],
        detail: [
            'Port 443 is exposed with SSL/TLS enabled',
            'API gateway lacks rate limiting protection',
            'Authentication tokens stored in memory without encryption',
        ],
    },
    {
        stepNumber: 2,
        assetUid: 'SECGENIE-AI-API',
        assetDescription: 'Backend API handling AI requests',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'MEDIUM',
        exposureLevel: 'Medium',
        assetTypeUid: 'GENAPI',
        assetType: 'Gen AI API',
        riskScore: 0,
        vulnerabilityUids: [],
        vulnerabilities: [],
        action: [
            'Bypass authentication checks',
            'Access internal API documentation',
            'Retrieve sensitive request/response patterns',
        ],
        detail: [
            'API uses deprecated OAuth 1.0 authentication',
            'No request signing or verification implemented',
            'Debug mode enabled in production environment',
        ],
    },
    {
        stepNumber: 3,
        assetUid: 'SECGENIE-GENAI-ENGINE',
        assetDescription: 'Core GenAI processing engine',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'LOW',
        exposureLevel: 'Low',
        assetTypeUid: 'GENAPP',
        assetType: 'Gen AI Application',
        riskScore: 8.3,
        vulnerabilityUids: ['CVE-2024-7771'],
        vulnerabilities: [
            { uid: 'CVE-2024-7771', statusUid: 'CLOSED' },
        ],
        action: [
            'Execute arbitrary code through prompt injection',
            'Access internal model variables and state',
            'Extract training data and model weights',
        ],
        detail: [
            'LLM engine does not sanitize user inputs',
            'Direct memory access possible from API layer',
            'Model runs with elevated privileges',
        ],
    },
    {
        stepNumber: 4,
        assetUid: 'SECGENIE-LLM-MODEL',
        assetDescription: 'Large language model used by SecGenie',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'NONE',
        exposureLevel: 'None',
        assetTypeUid: 'GENMODEL',
        assetType: 'Gen AI Model',
        riskScore: 0,
        vulnerabilityUids: [],
        vulnerabilities: [],
        action: [
            'Manipulate model behavior through fine-tuning attacks',
            'Extract proprietary model information',
            'Cause denial of service through resource exhaustion',
        ],
        detail: [
            'Model hosted on shared compute infrastructure',
            'No resource quotas or rate limiting enforced',
            'Model weights stored unencrypted on disk',
        ],
    },
    {
        stepNumber: 5,
        assetUid: 'SECGENIE-LLM-MODEL',
        assetDescription: 'Large language model used by SecGenie',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'NONE',
        exposureLevel: 'None',
        assetTypeUid: 'GENMODEL',
        assetType: 'Gen AI Model',
        riskScore: 0,
        vulnerabilityUids: [],
        vulnerabilities: [],
        action: [
            'Manipulate model behavior through fine-tuning attacks',
            'Extract proprietary model information',
            'Cause denial of service through resource exhaustion',
        ],
        detail: [
            'Model hosted on shared compute infrastructure',
            'No resource quotas or rate limiting enforced',
            'Model weights stored unencrypted on disk',
        ],
    },
    {
        stepNumber: 6,
        assetUid: 'SECGENIE-LLM-MODEL',
        assetDescription: 'Large language model used by SecGenie',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'NONE',
        exposureLevel: 'None',
        assetTypeUid: 'GENMODEL',
        assetType: 'Gen AI Model',
        riskScore: 0,
        vulnerabilityUids: [],
        vulnerabilities: [],
        action: [
            'Manipulate model behavior through fine-tuning attacks',
            'Extract proprietary model information',
            'Cause denial of service through resource exhaustion',
        ],
        detail: [
            'Model hosted on shared compute infrastructure',
            'No resource quotas or rate limiting enforced',
            'Model weights stored unencrypted on disk',
        ],
    }


];

export const Default: Story = {
    args: {
        steps,
        onChange: (node: any) => console.log('Node clicked:', node),
    },
};

export const WithVulnerabilities: Story = {
    args: {
        steps,
        onChange: (node: any) => console.log('Node clicked:', node),
    },
};

const highRiskSteps = [
    {
        stepNumber: 1,
        assetUid: 'SECGENIE-API-GATEWAY',
        assetDescription: 'Gateway routing requests to backend APIs',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'HIGH',
        exposureLevel: 'High',
        assetTypeUid: 'NETWORK',
        assetType: 'Network',
        relationship: 'SECGENIE-LLM-MODEL',
        riskScore: 0,
        vulnerabilityUids: [],
        vulnerabilities: [],
        action: [
            'Scan for open management ports',
            'Identify default or weak credentials',
            'Exploit exposed administrative interfaces',
        ],
        detail: [
            'Management UI exposed on port 8080 without authentication',
            'Default admin credentials unchanged (admin/admin)',
            'No IP whitelisting or VPN requirement for access',
        ],
    },
    {
        stepNumber: 2,
        assetUid: 'SECGENIE-AI-API',
        assetDescription: 'Backend API handling AI requests',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'MEDIUM',
        exposureLevel: 'Medium',
        assetTypeUid: 'GENAPI',
        assetType: 'Gen AI API',
        relationship: 'SECGENIE-API-GATEWAY',
        riskScore: 0,
        vulnerabilityUids: [],
        vulnerabilities: [],
        action: [
            'Access admin dashboard',
            'Enumerate all API keys and tokens',
            'Export database credentials',
        ],
        detail: [
            'API keys displayed in plain text in admin panel',
            'No audit logging of administrative actions',
            'All internal service credentials accessible from UI',
        ],
    },
    {
        stepNumber: 3,
        assetUid: 'SECGENIE-GENAI-ENGINE',
        assetDescription: 'Core GenAI processing engine',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'LOW',
        exposureLevel: 'Low',
        assetTypeUid: 'GENAPP',
        assetType: 'Gen AI Application',
        relationship: 'SECGENIE-AI-API',
        riskScore: 0,
        vulnerabilityUids: [],
        vulnerabilities: [],
        action: [
            'Connect directly to database using stolen credentials',
            'Query all user data and conversations',
            'Modify model configuration and parameters',
        ],
        detail: [
            'Database directly accessible from internet',
            'No encryption at rest for sensitive data',
            'Model configuration stored in plaintext config files',
        ],
    },
    {
        stepNumber: 4,
        assetUid: 'SECGENIE-LLM-MODEL',
        assetDescription: 'Large language model used by SecGenie',
        criticalityUid: 'HIGH',
        criticality: 'High',
        exposureLevelUid: 'NONE',
        exposureLevel: 'None',
        assetTypeUid: 'GENMODEL',
        assetType: 'Gen AI Model',
        relationship: 'SECGENIE-GENAI-ENGINE',
        riskScore: 0,
        vulnerabilityUids: [],
        vulnerabilities: [],
        action: [
            'Access production model files',
            'Download complete model weights and artifacts',
            'Deploy compromised model to attacker infrastructure',
        ],
        detail: [
            'Model files stored with world-readable permissions',
            'No checksums or integrity verification',
            'Backup files left in accessible directories',
        ],
    },
];

export const HighRiskPath: Story = {
    args: {
        steps: highRiskSteps,
        onChange: (node: any) => console.log('Node clicked:', node),
    },
};

/**
 * The shape a live AWS posture feed sends: `<region>:<type>:<id>` asset uids,
 * full asset-type names, a region on every step and no relationship on the last.
 * Kept as a story so the icon catalogue is exercised against real type strings.
 */
const awsSteps = [
    ['Internet Gateway', 'igw-99f150e2', 'us-east-1', 'HIGH', 'EXPOSED_TO'],
    ['VPC', 'vpc-0464167e', 'us-east-1', 'NONE', 'ATTACHED_TO'],
    ['Route Table', 'rtb-ecf90092', 'us-east-1', 'NONE', 'CONTAINS'],
    ['VPC Subnet', 'subnet-74a08328', 'us-east-1', 'HIGH', 'ASSOCIATED_WITH'],
    ['Network ACL', 'acl-96ae0beb', 'us-east-1', 'HIGH', 'ASSOCIATED_WITH'],
    ['EC2 Security Group', 'sg-0deeec5e2b4a51400', 'us-east-1', 'HIGH', 'EVALUATES_BEFORE'],
    ['EC2 Instance', 'i-0696eee7bf29fe034', 'us-east-1', 'HIGH', 'ATTACHED_TO'],
    ['IAM Role', 'AROAY33N5OT3G3SUEWPZN', 'global', 'NONE', 'ASSUMES'],
    ['SQS Queue', 'cloudtrail-ingest-queue', 'us-east-1', 'NONE', null],
].map(([assetType, id, region, exposure, relationship], idx) => ({
    stepNumber: idx + 1,
    assetUid: `${region}:${assetType}:${id}`,
    assetDescription: id as string,
    assetTypeUid: assetType as string,
    assetType: assetType as string,
    criticalityUid: 'HIGH',
    criticality: 'High',
    exposureLevelUid: exposure as string,
    exposureLevel: (exposure as string)[0] + (exposure as string).slice(1).toLowerCase(),
    riskScore: 90,
    region: region as string,
    relationship: (relationship as string | null) ?? undefined,
    vulnerabilityUids: [],
}));

export const AwsCloudPath: Story = {
    args: {
        steps: awsSteps,
        onChange: (node: any) => console.log('Node clicked:', node),
    },
};

/** `collapsed` is controlled here by the story itself, to demonstrate driving it from outside. */
export const Collapsed: Story = {
    args: {
        steps,
        collapsed: true,
        onChange: (node: any) => console.log('Node clicked:', node),
        onCollapsedChange: (collapsed: boolean) => console.log('Collapsed changed:', collapsed),
    },
};
