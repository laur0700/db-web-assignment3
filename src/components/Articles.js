import { loremIpsum } from "lorem-ipsum"


function Articles ({ articles, authors }) {
    var filter = false
    var idForFilter

    if(document.getElementById('filter-box').value === null){
        filter = false
    }
    else{
        filter = true
        idForFilter = document.getElementById('filter-box').value
    }

    return (
        <div className="d-flex flex-column">
            {articles.map(article => {
                if(filter === true){
                    if(article.userId === idForFilter){
                        return (
                            <div className="col">
                                <div className="fs-1 text-center">{article.title}</div>
                                <div className="text-center fw-bold">By {authors.find(element => element.id === article.userId).name}</div>
                                <div className="text-center">{loremIpsum({count:20})}</div> 
                            </div>
                        )
                    }
                }
                else{
                    return (
                        <div className="col">
                            <div className="fs-1 text-center">{article.title}</div>
                            <div className="text-center fw-bold">By {authors.find(element => element.id === article.userId).name}</div>
                            <div className="text-center">{loremIpsum({count:20})}</div> 
                        </div>
                    )
                }
            }
            )}
        </div>
    )
}

export default Articles