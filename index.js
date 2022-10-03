ReactDOM.render(<h1>Hello HK</h1>,document.getElementById("root"))
ReactDOM.render(<p>Helloo my name is Haron Mburu Learning React and am very much optimistic than ever.</p>,document.getElementById("root1"))
ReactDOM.render(<ul><li>Kimathi</li><li>Nyeri</li></ul>,document.getElementById("root2"))

function MainContent(){
    return(
<h1>This is HK in coding college which is very much intresting</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent/>
    </div>,
    document.getElementById("root4")
)
var root3=document.getElementById("root3")
var head=document.createElement("h1")
head.textContent="This is imperative way of coding"
head.className="header"
root3.append(head)

ReactDOM.render(<h1 className="header">This is Declarative way of coding</h1>,document.getElementById("root4"))