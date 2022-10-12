# FAPBUSTER

FapBuster is a simple node script (go rewrite whenever) to scrape Fapello.


## Limitations
Some formatting on the website is weird so certain creator names will not work, until I implement fixes, for example, some usernames with dashes may have issues being downloaded in their entirety.

Video Media are not downloaded, mainly due to personal choice as they're usually stupidly large.

There is a general lack of user-friendly error handling as this was just a personal script I quickly wrote up and hadn't planned on putting it anywhere until now.

## Usage


Clone the repo

run ``` npm i ```

run ``` node index.js (creator name) (number of media) ```


The script will then download files one-by-one into a directory with the creators name.
