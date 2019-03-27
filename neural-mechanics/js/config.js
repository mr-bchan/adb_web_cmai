/*
 Config file for API endpoints
*/

// API Endpoint

/* Prod setup */
// var API_ENDPOINT = 'http://neuralmechanics.ai/adb-api/'

/* Local setup */
var API_ENDPOINT = 'http://192.168.0.37:8000/'


// API POST URLs 
var POST_PROBLEM_URL = API_ENDPOINT + 'get_problems'
var POST_CAUSE_EFFECT_URL = API_ENDPOINT + 'get_problems'

var POST_PROBLEM_URL_DUMMY_RESULT = {
    "data": {
        "data": [
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.7368137,
                "section": "Footnote",
                "source": " rrp ",
                "subsection": "",
                "text": "mega cities",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.013570526999999999,
                "section": "III. DUE DILIGENCE",
                "source": " rrp ",
                "subsection": "B. Economic and Financial",
                "text": "freight shifts from road transport",
                "title": "Anhui Intermodal Sustainable Transport Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jiangxi-pingxiang-integrated-rural-urban-infrastructure-development-project-rrp",
                "match": [],
                "project_no": "47030-002",
                "score": 0.050780244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "stormwater into a channel",
                "title": "Jiangxi Pingxiang Integrated RuraI—Urban Infrastructure Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.592244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "rapidly growing emissions",
                "title": "Anhui Intermodal Sustainable Transport Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.592244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "road transport for moving freight",
                "title": "Anhui Intermodal Sustainable Transport Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.20221278,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "deficit of infrastructure and municipal services",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.20221278,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "environmental pollution",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jiangxi-pingxiang-integrated-rural-urban-infrastructure-development-project-rrp",
                "match": [],
                "project_no": "47030-002",
                "score": 0.028744241,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "small cities and townships",
                "title": "Jiangxi Pingxiang Integrated RuraI—Urban Infrastructure Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.013486554,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "global climate change",
                "title": "Anhui Intermodal Sustainable Transport Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/guangxi-baise-integrated-urban-environment-improvement-project-rrp",
                "match": [],
                "project_no": "44022-023",
                "score": 0.20221278,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "solid waste transportation capacity increased",
                "title": "Guangxi Baise Integrated Urban Environment Improvement Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jiangxi-pingxiang-integrated-rural-urban-infrastructure-development-project-rrp",
                "match": [],
                "project_no": "47030-002",
                "score": 0.028744241,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "lack or have incomplete sewer systems",
                "title": "Jiangxi Pingxiang Integrated RuraI—Urban Infrastructure Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/yunnan-puer-regional-integrated-road-network-development-project-rrp",
                "match": [],
                "project_no": "46040-003",
                "score": 0.07655063,
                "section": "III. DUE DILIGENCE",
                "source": " rrp ",
                "subsection": "E. Safeguards",
                "text": "pollutants",
                "title": "Yunnan Pu’er Regional Integrated Road Network Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.7368137,
                "section": "Footnote",
                "source": " rrp ",
                "subsection": "",
                "text": "extensive air and water pollution",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.7368137,
                "section": "Footnote",
                "source": " rrp ",
                "subsection": "",
                "text": "water scarcity",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.7368137,
                "section": "Footnote",
                "source": " rrp ",
                "subsection": "",
                "text": "traffic gridlock",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.7368137,
                "section": "Footnote",
                "source": " rrp ",
                "subsection": "",
                "text": "overcrowding",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/yunnan-puer-regional-integrated-road-network-development-project-rrp",
                "match": [],
                "project_no": "46040-003",
                "score": 0.07655063,
                "section": "III. DUE DILIGENCE",
                "source": " rrp ",
                "subsection": "E. Safeguards",
                "text": "increases in traffic noise",
                "title": "Yunnan Pu’er Regional Integrated Road Network Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.592244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "traffic congestion",
                "title": "Anhui Intermodal Sustainable Transport Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.7368137,
                "section": "Footnote",
                "source": " rrp ",
                "subsection": "",
                "text": "escalating housing prices",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.013570526999999999,
                "section": "III. DUE DILIGENCE",
                "source": " rrp ",
                "subsection": "B. Economic and Financial",
                "text": "traffic accidents",
                "title": "Anhui Intermodal Sustainable Transport Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.592244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "local air pollution",
                "title": "Anhui Intermodal Sustainable Transport Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jiangxi-pingxiang-integrated-rural-urban-infrastructure-development-project-rrp",
                "match": [],
                "project_no": "47030-002",
                "score": 0.050780244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "lack of natural capacity to absorb rainwater runoff",
                "title": "Jiangxi Pingxiang Integrated RuraI—Urban Infrastructure Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jiangxi-pingxiang-integrated-rural-urban-infrastructure-development-project-rrp",
                "match": [],
                "project_no": "47030-002",
                "score": 0.050780244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "harms river ecology",
                "title": "Jiangxi Pingxiang Integrated RuraI—Urban Infrastructure Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jiangxi-pingxiang-integrated-rural-urban-infrastructure-development-project-rrp",
                "match": [],
                "project_no": "47030-002",
                "score": 0.050780244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "downstream flash floods",
                "title": "Jiangxi Pingxiang Integrated RuraI—Urban Infrastructure Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jiangxi-pingxiang-integrated-rural-urban-infrastructure-development-project-rrp",
                "match": [],
                "project_no": "47030-002",
                "score": 0.050780244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "domestic wastewater is discharged untreated into rivers",
                "title": "Jiangxi Pingxiang Integrated RuraI—Urban Infrastructure Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jilin-urban-development-project-rrp",
                "match": [],
                "project_no": "46048-002",
                "score": 0.20221278,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "constrained economic development",
                "title": "Jilin Urban Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/guangxi-baise-integrated-urban-environment-improvement-project-rrp",
                "match": [],
                "project_no": "44022-023",
                "score": 0.20221278,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "uncontrolled solid waste dumping",
                "title": "Guangxi Baise Integrated Urban Environment Improvement Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/jiangxi-pingxiang-integrated-rural-urban-infrastructure-development-project-rrp",
                "match": [],
                "project_no": "47030-002",
                "score": 0.050780244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "non- integrated approaches to flood protection",
                "title": "Jiangxi Pingxiang Integrated RuraI—Urban Infrastructure Development Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.013486554,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "rapid growth in the country's emissions",
                "title": "Anhui Intermodal Sustainable Transport Project"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/yunnan-puer-regional-integrated-road-network-development-project-rrp",
                "match": [],
                "project_no": "46040-003",
                "score": 0.07655063,
                "section": "III. DUE DILIGENCE",
                "source": " rrp ",
                "subsection": "E. Safeguards",
                "text": "road improvements",
                "title": "Yunnan Pu’er Regional Integrated Road Network Development Project"
            }
        ],
        "related_keywords": [
            "pollutants",
            "agriculture",
            "refers",
            "coal",
            "shanghai",
            "emissions",
            "rivers",
            "requires",
            "hubei",
            "congestion"
        ]
    },
    "success": true
}

var POST_CAUSE_EFFECT_URL_DUMMY_RESULT = {
    "data": {
        "data": [
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.592244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "road transport for moving freight",
                "title": "Anhui Intermodal Sustainable Transport Project",
                "type": "cause"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.592244,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "local air pollution",
                "title": "Anhui Intermodal Sustainable Transport Project",
                "type": "effect"
            },
            {
                "country": "People’s Republic of China",
                "link": "https://www.adb.org/projects/documents/anhui-intermodal-sustainable-transport-project-rrp",
                "match": [],
                "project_no": "45021-002",
                "score": 0.013486554,
                "section": "II. THE PROJECT",
                "source": " rrp ",
                "subsection": "A. Rationale",
                "text": "global climate change",
                "title": "Anhui Intermodal Sustainable Transport Project",
                "type": "effect"
            }
        ],
        "related_keywords": [
            "pollutants",
            "agriculture",
            "refers",
            "coal",
            "shanghai",
            "emissions",
            "rivers",
            "requires",
            "hubei",
            "congestion"
        ]
    },
    "success": true
}