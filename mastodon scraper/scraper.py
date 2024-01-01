import requests
import json
from bs4 import BeautifulSoup

def scrape_public_toots(instance_url, output_file="toots.json", max_pages=20):
    formatted_toots = []

    page = 1
    while page <= max_pages:
        public_timeline_url = f"{instance_url}/api/v1/timelines/public?page={page}"

        print(f"Fetching page {page} - {public_timeline_url}")

        ## makes a get request
        response = requests.get(public_timeline_url)

        ## verifies request
        if response.status_code == 200:
            toots = response.json()

            ## pulls specific information from each toot
            for toot in toots:
                ## uses beautiful soup to convert from html to plain text
                post_text = BeautifulSoup(toot['content'], 'html.parser').get_text()
                hashtags = [tag['name'] for tag in toot['tags']]
                mentions = [mention['acct'] for mention in toot['mentions']]
                author = toot['account']['acct']

                toot_data = {
                    "author": author,
                    "post": post_text,
                    "hashtags": hashtags,
                    "mentions": mentions
                }

                formatted_toots.append(toot_data)

            next_page_url = get_next_page_url(response)
            if next_page_url:
                page += 1
            else:
                break

        else:
            print(f"Error: Unable to retrieve public toots. Status code {response.status_code}")
            break

    ## stores data in json file
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(formatted_toots, json_file, ensure_ascii=False, indent=4)

    print(f"Data successfully stored in {output_file}")

## gets the next page to continue scraping into the past
def get_next_page_url(response):
    if 'Link' in response.headers:
        links = requests.utils.parse_header_links(response.headers['Link'])
        for link in links:
            if link['rel'] == 'next':
                return link['url']
        for link in reversed(links):
            if link['rel'] == 'prev':
                return link['url']
    return None

## max pages may be changed but its currently set to scrape the last 20 pages of toots
scrape_public_toots('https://mastodon.social', output_file="toots.json", max_pages=20)
