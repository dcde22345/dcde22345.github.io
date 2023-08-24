import copy from 'copy-to-clipboard'

const Game1 = () => {
    const handleCopy = (id) =>{
        const element = document.querySelector(`#${id}`)
        switch(element.textContent){
            case "____":
                alert("請先選擇選項喔！")
                break
            case "planning the meal":
                copy("a man is thinking what to eat at lunch")
                alert("複製指令成功！")
                break
            case "preserving the food right":
                copy("")
                alert("複製指令成功！")
            case "using leftovers":
                alert("複製指令成功！")

        }
    }
    return(
        <div className="background2 vw-100 vh-100">
            <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='display-2 fw-bold mb-5'>第一幕</h1>
                <div className='bg-white bg-opacity-75 p-3 border border-3 border-dark mb-5 position-relative'>
                    <p className='display-3 mb-0'>I want to share a story about <span id='key' className='fw-bold'>____</span>.</p>
                    <button type="button" className='btn btn-dark position-absolute' style={{top:"0", right: '0', transform: "Translate(0%,-120%)"}}>
                        <span className='' onClick={() => {handleCopy("key")}}>複製指令</span>
                    </button>
                </div>
                <div className='d-flex justify-content-space align-items-center'>
                    <button type="button" className='btn btn-dark m-3'>
                        <span className='display-6' onClick={() => {document.querySelector("#key").textContent = 'planning the meal'}}>Planning the meal</span>
                    </button>
                    <button type="button" className='btn btn-dark m-3'>
                        <span className='display-6' onClick={() => {document.querySelector("#key").textContent = 'preserving the food right'}}>Preserving the food right</span>
                    </button>
                    <button type="button" className='btn btn-dark m-3'>
                        <span className='display-6' onClick={() => {document.querySelector("#key").textContent = 'using leftovers'}}>Using leftovers</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Game1;