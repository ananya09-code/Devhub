import "./css/uploadfrom.css"

function UploadFrom(){

    return(
        <div className="upfrom-con">
            <h1>Post a snippet</h1>

            <label>Title</label>
            <input type="text" placeholder="e.g. Custom debounce hook for React" />

            <label>Description (optional)</label>
            <input type="text" placeholder="What does this snippet do?" />

            <label>Code</label>
            <textarea placeholder="Paste your code here..."></textarea>

            <label>Language</label>
            <select>
                <option>JavaScript</option>
                <option>TypeScript</option>
                <option>Python</option>
                <option>Java</option>
            </select>

            <label>Tags</label>
            <input type="text" placeholder="react, hooks, utility" />

            <div className="form-actions">
                <button className="publish-btn">Publish snippet</button>
                <button className="draft-btn">Save draft</button>
            </div>

        </div>
    )
}

export default UploadFrom;