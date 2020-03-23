let date = new Date();
const rountHandler = (req, res) => {
    console.log('server started');
    let url = req.url;
    res.write('<h1>Welcome to PoC 1.1</h1> App without express');


    if (url == '/') {
        res.statusCode=200;
        res.write('<div></div>')
        res.write('</div>Select a Day</div>')
        res.write('<div></div>')
        res.write('<div></div>')
        res.write('<span> <a href="monday">Monday</a></span>')
        res.write('<span> <a href="tuesday">Tuesday</a></span>')
        res.write('<span> <a href="wednesday">Wednesday</a></span>')
        res.end();
    }
    else if (url == '/monday') {
        pageSetup("monday", res);
    }
    else if (url == '/tuesday') {
        pageSetup("tuesday", res);
    }
    else if (url == '/wednesday') {
        pageSetup("wednesday", res);
    }
}

function pageSetup(day, res) {
    res.statusCode=200;
    res.write('<div></div>')
    res.write('<div></div>')
    res.write('</div>Welcome to ' + day + '</div>')
    res.write('<div></div>')
    res.write('<span>Current time </span>  hr :' + date.getHours() + " mn :" + date.getMinutes())
    res.write('<div></div>')
    res.write('<span> <a href="/">Back to homepage</a></span>')
    res.end();
}

module.exports = rountHandler;