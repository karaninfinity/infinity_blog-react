import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Api_url from '../../Request';
import { Button, Modal, Table } from 'react-bootstrap'

const Blogs = () => {

    const [Data, setData] = useState([]);
    const [Show, setShow] = useState(false);
    const [Category, setCategory] = useState([]);
    const [Subcategory, setSubcategory] = useState([]);
    const [Selcategory, setSelcategory] = useState('');
    const [blogImage, setBlogImage] = useState(null);
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [updateBlogId, setUpdateBlogId] = useState(null);

    function Insert() {

        let data = new FormData();
        data.append('cId', document.getElementById('Subcategory').value);
        data.append('iParentCatID', document.getElementById('Category').value);
        data.append('vBlogTitle', document.getElementById('blog_title').value);
        data.append('vBlogDescription', document.getElementById('blog_discription').value);
        data.append('vBlogFeatureImage', blogImage);
        data.append('vBlogThumbnailImage', thumbnailImage);
        data.append('tCreatedDate', new Date().toISOString().slice(0, 10));
        data.append('tUpdatedDate', '2023-05-05');

        axios.post(`${Api_url}/blog`, data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(result => console.log(result.data))
            .catch(error => console.error('Error uploading blog:', error));

        handleClose();
        getBlog();
    }

    function getBlog() {
        axios.get(`${Api_url}/blog`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        })
            .then(resp => {
                console.log(resp.data);
                setData(resp.data)
            })
    }

    function getCategory() {
        fetch(`${Api_url}/category`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
            .then(resp => resp.json())
            .then(result => {
                setCategory(result)
                console.log(result);
            });
    }

    function getSubcategory() {

        axios.get(`${Api_url}/category/iParentCatID/${Selcategory}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
            .then(result => {
                setSubcategory(result.data)
                console.log(result.data)
            })
    }

    function DeleteBlog(id) {
        axios.delete(`${Api_url}/blog/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
        getBlog();
    }

    function resetFormFields() {
        document.getElementById('Category').value = '';
        document.getElementById('Subcategory').value = '';
        document.getElementById('blog_title').value = '';
        document.getElementById('blog_discription').value = '';
        setBlogImage('');
        setThumbnailImage('');
        setUpdateBlogId(null);
    }

    function updateBlog() {
        const updatedData = {
            cId: document.getElementById('Subcategory').value,
            iParentCatID: document.getElementById('Category').value,
            vBlogTitle: document.getElementById('blog_title').value,
            vBlogDescription: document.getElementById('blog_discription').value,
            tUpdatedDate: new Date().toISOString().slice(0, 10),
        };
        axios.put(`${Api_url}/blog/${updateBlogId}`, updatedData)
            .then(result => console.log(result));
        getBlog();
    }

    function handleUpdateClick(id) {
        let UpdateBlog = Data.find(item => item.bId === id)
        console.log(UpdateBlog);
        if (UpdateBlog) {
            setUpdateBlogId(id);
            handleShow();
        }
    }

    function handleFormSubmit() {
        if (updateBlogId) {
            updateBlog();
        } else {
            Insert();
        }
    }

    const handleClose = () => {
        setShow(false);
        resetFormFields();
    };
    const handleShow = () => {
        getCategory();
        setShow(true);
    }

    useEffect(() => {
        getBlog();
    }, [])

    useEffect(() => {
        getSubcategory();
    }, [Selcategory])


    return (
        <>
            <div className="action__btn">
                <Button onClick={handleShow}>Add New</Button>
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Subcategory Name</th>
                        <th>Discription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map(item => (
                            <tr key={item.bId}>
                                <td></td>
                                <td>{item.vBlogTitle}</td>
                                <td>{item.vCategoryName}</td>
                                <td>{item.vBlogDescription}</td>
                                <td>
                                    <Button onClick={() => handleUpdateClick(item.bId)}> Update </Button>
                                    <Button className='ms-2' variant='danger' onClick={() => DeleteBlog(item.bId)}> Delete </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Modal
                show={Show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{updateBlogId ? 'Update Blog' : 'Add New Blog'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <select onChange={(e) => { setSelcategory(e.target.value) }} id='Category' className="form-select my-2" aria-label="Default select example">
                            <option selected>Select Category</option>
                            {
                                Category.map(item => (
                                    <option key={item.cId} value={item.cId}>{item.vCategoryName}</option>
                                ))
                            }
                        </select>
                        <select className="form-select" id='Subcategory' aria-label="Default select example">
                            <option selected>Subcategory</option>
                            {
                                Subcategory.map(item => (
                                    <option key={item.cId} value={item.cId}>{item.vCategoryName}</option>
                                ))
                            }
                        </select>
                        <div className="form-group">
                            <label htmlFor="bblog ">Blog title</label>
                            <input type="text" className="form-control" id="blog_title" aria-describedby="" placeholder="Blog Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="blog discription">Blog Discription</label>
                            <input type="text" className="form-control" id="blog_discription" aria-describedby="" placeholder="Blog Discription" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Image">Image</label>
                            <input className='form-control' type="file" name="" id="BlogFeatureImage" onChange={(e) => setBlogImage(e.target.files[0].name)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Image">Thumbnail Image</label>
                            <input className='form-control' type="file" name="" id="ThumbnailImage" onChange={(e) => setThumbnailImage(e.target.files[0].name)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='btn' onClick={handleFormSubmit}>{updateBlogId ? 'Update' : 'Save'}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Blogs
