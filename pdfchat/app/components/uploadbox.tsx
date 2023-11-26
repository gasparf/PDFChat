import {BiUpload} from 'react-icons/bi'

export default function UploadBox() {
    return (
        <div className="bg-beige flex align-center justify-center border border-blue-600">
            <div>
                <BiUpload size={70}> </BiUpload>
            </div>
            <div>
                <p className='justify-center'> Upload Your PDF Here </p>
            </div>
        </div>
    )
    
}