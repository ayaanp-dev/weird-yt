from dotenv import dotenv_values
from googleapiclient.discovery import build
from datetime import datetime

api_key = dotenv_values(".env")["api_key"]
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

# creating youtube resource object
# for interacting with API
youtube = build(YOUTUBE_API_SERVICE_NAME,
                YOUTUBE_API_VERSION,
                developerKey=api_key)


def get_vids(maxResults, query):
    now = datetime.now()
    vids = []

    response = youtube.search().list(
        part="snippet",
        maxResults=maxResults,
        q=query,
        publishedAfter=f"{now.year}-{now.month}-{now.day}T00:00:01.000Z"
    )
    response = response.execute()

    for vid in response["items"]:
        vids.append(vid["id"]["videoId"])

    return vids

def get_comments(maxResults, videoId):
    comments = []
    response = youtube.commentThreads().list(
        part="snippet",
        maxResults=maxResults,
        textFormat="plainText",
        order="time",
        videoId=videoId
    ).execute()

    for i in range(response["pageInfo"]["totalResults"]):
        comment = response["items"][i]["snippet"]["topLevelComment"]["snippet"]["textDisplay"]
        comments.append(comment)

    return comments

def get_stuff():
    vid_and_comms = {}
    weirdVids = []

    for video in get_vids(21, "weird"):
        try:
            weirdCount = 0
            comments = get_comments(5000, video)
            for comment in comments:
                if "weird" in comment or "crazy" in comment or "extraordinary" in comment:
                    weirdCount += 1

            vid_and_comms[video] = weirdCount
        except:
            continue

    sorted_dict = {}
    sorted_keys = sorted(vid_and_comms, key=vid_and_comms.get)

    for w in sorted_keys:
        sorted_dict[w] = vid_and_comms[w]

    vid_and_comms = sorted_dict

    daily_vid = list(vid_and_comms.items())[-1][0]
    other_videos = list(vid_and_comms.items())
    del other_videos[-1]
    other_vids = []

    for vid in other_videos:
        other_vids.append(vid[0])

    return daily_vid, other_vids