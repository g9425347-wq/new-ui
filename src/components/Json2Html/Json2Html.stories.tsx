import { Meta, StoryObj } from '@storybook/react';
import { Json2Html, Json2HtmlProps } from './Json2Html';

const meta: Meta = {
    title: 'Components/Json2Html',
    component: Json2Html,
};

//Sample css
const Css = {
    jsonTr: {
        height: '25px',
    },
    jsonTd: {
        padding: '5px',
        borderSpacing: '2px',
        borderRadius: '5px',
    },
    rowSpacer: {
        height: '2px',
    },
    rootElement: {
        padding: '5px',
        borderSpacing: '2px',
        backgroundColor: 'red',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        borderRadius: '5px',
    },
    subElement: {
        padding: '5px',
        borderSpacing: '2px',
        backgroundColor: 'red',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        borderRadius: '5px',
    },
    dataCell: {
        borderSpacing: '2px',
        backgroundColor: '#F1F1F1',
        fontFamily: 'Arial',
        borderRadius: '5px',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = (args: Json2HtmlProps) => <Json2Html {...args} />


Test.args = {
    json: [{
        "glossary": {
            "title": "example glossary",
            "GlossDiv": {
                "title": "S",
                "GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
                        "SortAs": "SGML",
                        "GlossTerm": "Standard Generalized Markup Language",
                        "Acronym": "SGML",
                        "Abbrev": "ISO 8879:1986",
                        "GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
                            "GlossSeeAlso": ["GML", "XML"]
                        },
                        "GlossSee": "markup"
                    }
                }
            }
        }
    }]
};

export const Test1: Story = (args: Json2HtmlProps) => <Json2Html {...args} />

Test1.args = {
    json: JSON.parse("{\"Item\":{\"id\":\"60021719\",\"domain\":\"mphasis@mphasis\",\"priority\":\"7\",\"context\":\"my.alert.mphasis@mphasis.Communication_to_SOCRadar_IP\",\"category\":null,\"srcPort\":null,\"srcIp\":null,\"srcHost\":null,\"dstIp\":null,\"dstPort\":null,\"dstHost\":null,\"protocol\":null,\"username\":\"desireddy.akshitha@mphasis.com\",\"application\":null,\"engine\":null,\"extraData\":\"{\\\"entity_sourceIP\\\":\\\"%2F172.17.234.86\\\",\\\"entity_destiIpE\\\":\\\"%5B%22SOCRadar-Botnet+C%26C+-+Block-IP%22%5D\\\",\\\"entity_action\\\":\\\"deny\\\",\\\"entity_destinationPort\\\":\\\"3545\\\",\\\"entity_client\\\":\\\"mphasis%40mphasis\\\",\\\"eventdate\\\":\\\"2024-08-27+02%3A40%3A00.000\\\",\\\"entity_destinationIP\\\":\\\"%2F74.82.46.26\\\"}\",\"alertDate\":null,\"status\":\"0\",\"ack_status_date\":null,\"createDate\":\"1724726790000\",\"updateDate\":null,\"scaled\":\"false\",\"digest\":\"7111349266e3ad102e77ff7643300617ab1ef220\",\"uniquedigest\":\"9fd0b821ea4c639bfad80890da38ffae3884ac59\",\"postAlertAction\":null,\"contextLabel\":null,\"contextSubscription\":null,\"shouldSend\":\"false\",\"alertOwner\":null,\"fullExtraData\":null,\"alertType\":null,\"alertMitreTactics\":null,\"alertMitreTechniques\":null,\"alertPriority\":null,\"alertDefinition\":{\"id\":\"31995\",\"creationDate\":\"1717321813000\",\"name\":\"Communication to SOCRadar IP\",\"message\":\"Communication to SOCRadar IP\",\"description\":\"Communication to SOCRadar IP\",\"categoryName\":\"My Alerts\",\"categoryId\":\"411\",\"subcategory\":\"lib.my.mphasis@mphasis.threats\",\"subcategoryId\":\"896\",\"subcategoryName\":\"threats\",\"isActive\":\"true\",\"isFavorite\":\"false\",\"isAlertChain\":\"false\",\"alertCorrelationContext\":{\"id\":\"31468\",\"nameId\":\"my.alert.mphasis@mphasis.Communication_to_SOCRadar_IP\",\"ownerEmail\":\"desireddy.akshitha@mphasis.com\",\"querySourceCode\":\"from firewall.paloalto.traffic\\r\\n    where dstPort!=53\\r\\n    select `lu/socradar_threat_intelligence_ips/collection_name`(dstIp) as entity_destiIpE\\r\\n    where entity_destiIpE is not null\\r\\n    select device_name as entity_deviceName, srcIp as entity_sourceIP,dstIp as entity_destinationIP,srcNatIp as entity_sourceNatIP,dstNatIp as entity_destinationNatIP, srcPort as entity_sourcePort, dstPort as entity_destinationPort,proto as entity_protocal,action as entity_action,repCnt as entity_eventCount,client as entity_client\\r\\n    group every 5m by entity_sourceIP,entity_destinationIP,entity_destinationPort,entity_action,entity_destiIpE,entity_client\",\"priority\":\"7\",\"correlationTrigger\":{\"kind\":\"each\",\"externalPeriod\":null,\"externalOffset\":null,\"internalPeriod\":null,\"internalOffset\":null},\"withSelectAll\":\"true\",\"timezone\":\"Asia/Calcutta\",\"locale\":\"en_US\"}},\"allExtraDataFields\":{\"entity_sourceIP\":\"%2F172.17.234.86\",\"entity_destiIpE\":\"%5B%22SOCRadar-Botnet+C%26C+-+Block-IP%22%5D\",\"entity_action\":\"deny\",\"entity_destinationPort\":\"3545\",\"entity_client\":\"mphasis%40mphasis\",\"eventdate\":\"2024-08-27+02%3A40%3A00.000\",\"entity_destinationIP\":\"%2F74.82.46.26\"},\"tags\":null,\"entities\":null,\"commentsList\":null,\"integrations\":null,\"numberOfComments\":null,\"permissions\":{\"editable\":null},\"contexto\":null}}")
};

export const Default: Story = (args: Json2HtmlProps) => <Json2Html {...args} />

Default.args = {
    // cssProp: Css,
    json: [
        {
            firstName: 'John',
            lastName: 'Edward',
            email: 'john@xyz.com',
            Salary: '$40000',
            address: '',
            pincode: '600097',
            child: [
                {
                    firstName: 'Jayant',
                    lastName: 'Varma',
                    email: 'jayanth@alertfusion.com',
                },
                {
                    firstName: 'Jaicind',
                    lastName: 'S',
                    email: 'jaicind@alertfusion.com',
                    address: '',
                    pincode: '600097',
                },
            ],
        },
        {
            firstName: 'Raja',
            lastName: 'PV',
            email: 'raja@alertfusion.com',
            address: '',
            pincode: '600097',
        },
        {
            firstName: 'John',
            lastName: 'Edward',
            email: 'john@@xyz.com',
        },
    ],
};
