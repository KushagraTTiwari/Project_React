const h1 = React.createElement(
    "h1",
    {
        id:"title",
        style:{
            margin:"0px",
            padding:"0px",
            color:"light-green"
        }
    },"Hello EveryOne")
const h2 = React.createElement(
    "h2",
    {
        id:"title2",
        style:{
            margin:"0px",
            padding:"0px",
            color:"aqua"
        }
    },"Lets start the show")
const div = React.createElement(
    "div",
    {
        id:"container"
    },[h1,h2])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)