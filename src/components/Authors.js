function Authors ({ authors }) {
    return (
        <div className="d-flex flex-column">
            <select id="filter-box">
                <option value={null}>filter by author...</option>
                {authors.map(author => (
                   <option value={author.id}>{author.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Authors