from scrapy.http import TextResponse
import requests
import bs4
from api_calls import ada_price_api, price_api
from flask import Flask, request
from flask.json import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
nft_dict = []


def get_img_id(wallet_id):
    req = requests.get(f"https://cardanoscan.io/address/{wallet_id}")
    soup = bs4.BeautifulSoup(req.content, "html5lib")
    nft = soup.find_all("option")[10:]
    count = 0
    for item in nft:
        count += 1
        asset_id = item['value']
        var = item.text
        policy_id = var.split(":")[2][:56]
        asset_name = var.split(":")[0]
        cs_url = f"https://cardanoscan.io/token/{asset_id}"
        try:
            get_assetid = requests.get(cs_url)
            get_assetid = TextResponse(
                body=get_assetid.content, url=cs_url)
            var1 = str(get_assetid.css('div#fingerprintButton').attrib['onclick']
                       .replace('copyToClipboard', '')
                       .replace("(", "")
                       .replace(")", "")
                       .replace("fingerprintButton", "")
                       )

            new_id = (var1.split(",")[0])[1:-1]
            ceexplorer = f"https://cexplorer.io/asset/{new_id}"
            get_img = requests.get(ceexplorer)
            get_img = TextResponse(body=get_img.content, url=cs_url)
            img = get_img.css('img.img-fluid').attrib['src']
        except:
            img = "https://miro.medium.com/max/1168/1*7MR5KsgkJad8QTo2e7DVjg.png"

        if img == "https://miro.medium.com/max/1168/1*7MR5KsgkJad8QTo2e7DVjg.png":
            nft_price = "This is a native token"
            usd_price = "This is a native token"
        else:
            nft_price = price_api(policy_id)
            usd_price = (nft_price*(ada_price_api()))
        nft_dict.append({'asset_name': asset_name,
                        'policy_id': policy_id,
                         'img': img,
                         'nft_price': nft_price,
                         'usd_price': usd_price})


# get_img_id('addr1q9e96g3ctafpand3t8sa7p3sky8cuh03u6adkex4kjz39mt6s0wl2ej59gsmff47ak398r4hh9a2xp5hdyj6dgjdj64qq9rute')


@app.route('/add_address/<wallet_id>', methods=['GET', 'POST'])
def wallet_data(wallet_id):
    if request.method == 'POST':
        return {'wallet_id': wallet_id}

    if request.method == 'GET':
        get_img_id(wallet_id)
        print(nft_dict)
        # return nft_dict
        return jsonify(nft_dict)


if __name__ == '__main__':
    app.run(debug=True)
