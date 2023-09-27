import React , {useEffect} from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const AddBlog = () => {
    useEffect(()=>{
        const fileInput = document.getElementById('formFile');
        const imagePreview = document.getElementById('imagePreview');

        fileInput.addEventListener('change', function () {
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    imagePreview.src = e.target.result;
                };

                reader.readAsDataURL(file);
            } else {
                // Clear the image preview if no file is selected
                imagePreview.src = "";
            }
        });

  
    },[])
    useEffect(()=>{
        console.log('hello')
        ClassicEditor
        .create( document.querySelector( '#editor' ) )
        .then( editor => {
            editor;
        } )
        .catch( error => {
            console.error( 'There was a problem initializing the editor.', error );
        } );
    },[])
  return (
    <div class="container-fluid pt-4 px-4">
    <div class=" bgSecondary rounded row  align-items-center justify-content-center  p-4">
        <div>
            <div class="col-sm-12 col-xl-12">
                <div class="bgSecondary rounded h-100 p-4">
                    <h6 class="mb-4 text-light">Add Featured Product</h6>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label lightGray">Title</label>
                            <input type="text" class="form-control bgDark border-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="formFile" class="form-label lightGray">Featured Image</label>
                            <input class="form-control bg-dark border-0" type="file" id="formFile" />
                        </div>

                        <div class="mb-3">
                            <label for="imagePreview" class="form-label lightGray">Image Preview:</label>
                            <img src="" alt="Image Preview" id="imagePreview"
                                style={{maxWidth: "100%" , maxHeight: "200px"}} />
                        </div>

                        <script>

                        </script>
                        <div class="mb-3">
                            <div id="editor"></div>
                
                        </div>

                        <button type="submit" class="btn text-center text-light bgPrimary">Add Blog/ Update Blog</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddBlog