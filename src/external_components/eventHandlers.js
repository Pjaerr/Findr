function event_like(url)
{
    /*Code here for when a place is liked.*/
    window.open(url, '_blank');
}

function event_dislike(event)
{
    /*Code here for when a place is disliked.*/
    event();
}

export
{
    event_like,
    event_dislike
}