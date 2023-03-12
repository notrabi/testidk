var data = {
    Points: 0,
    PointsPerClick: 1,
}

function getPoints() {
    data.Points += data.PointsPerClick
    document.ElementFindId("pointDisplay").innerhtml = data.Points + " Points"
}