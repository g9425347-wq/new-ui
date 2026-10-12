import { Meta, StoryObj } from '@storybook/react';
import { InfraIcon, InfraAssetIcon } from './InfraIcon';
import { ALL_INFRA_COMPONENTS, INFRA_PLATFORMS, INFRA_COMPONENTS } from './infraCatalog';

const meta: Meta<typeof InfraIcon> = {
    title: 'Components/InfraIcon',
    component: InfraIcon,
    argTypes: {
        iconKey: { control: 'select', options: ALL_INFRA_COMPONENTS.map((c) => c.iconKey) },
        platformBadge: { control: 'select', options: INFRA_PLATFORMS.map((p) => p.badgeText) },
        size: { control: { type: 'range', min: 16, max: 64, step: 4 } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconKey: 'HardDriveDownload',
        platformBadge: 'AWS',
        platformColor: '#FF9900',
        size: 32,
        isCompromised: false,
    },
};

/** The full catalogue: every component across every platform scope. */
export const Catalogue: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, padding: 24 }}>
            {(Object.keys(INFRA_COMPONENTS) as (keyof typeof INFRA_COMPONENTS)[]).map((category) => (
                <div key={category}>
                    <h4 style={{ margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: 1, fontSize: 11, color: '#718096' }}>
                        {category.replace('_', ' & ')}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                        {INFRA_COMPONENTS[category].map((component) => (
                            <div key={component.id} style={{ width: 140, textAlign: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
                                    {INFRA_PLATFORMS.map((platform) => (
                                        <InfraAssetIcon
                                            key={platform.id}
                                            assetType={component.id}
                                            platform={platform.id}
                                            size={26}
                                        />
                                    ))}
                                </div>
                                <p style={{ fontSize: 11, color: '#2D3748', marginTop: 8, lineHeight: 1.3 }}>{component.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    ),
};

/** A path rendered straight from the two raw data keys a feed already carries. */
export const AttackChain: Story = {
    render: () => {
        const chain = [
            { name: 'Public S3 Leak', assetType: 'object_storage', platform: 'aws', pwned: true },
            { name: 'Compromised ECR Registry', assetType: 'ECR', platform: 'aws', pwned: true },
            { name: 'Exposed Elasticsearch Cluster', assetType: 'elasticsearch', platform: 'azure', pwned: true },
            { name: 'Corporate SAN Core Backup Storage', assetType: 'SAN', platform: 'on-prem', pwned: false },
        ];

        return (
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', padding: 24 }}>
                {chain.map((step, idx) => (
                    <div key={step.name} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                        <div style={{ textAlign: 'center', width: 110 }}>
                            <InfraAssetIcon
                                assetType={step.assetType}
                                platform={step.platform}
                                isCompromised={step.pwned}
                                size={32}
                            />
                            <p style={{ fontSize: 11, fontWeight: 600, color: '#2D3748', marginTop: 10 }}>{step.name}</p>
                        </div>
                        {idx < chain.length - 1 && (
                            <div style={{ color: step.pwned ? '#E53E3E' : '#CBD5E0', fontSize: 20, fontWeight: 700 }}>&#10142;</div>
                        )}
                    </div>
                ))}
            </div>
        );
    },
};
