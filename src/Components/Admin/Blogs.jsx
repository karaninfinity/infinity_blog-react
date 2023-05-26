import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Api_url from '../../Request';
import { Button, Modal, Table } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Blogs = () => {

    const [Data, setData] = useState([]);
    const [Show, setShow] = useState(false);
    const [Category, setCategory] = useState([]);
    const [Subcategory, setSubcategory] = useState([]);
    const [Selcategory, setSelcategory] = useState('');
    const [blogImage, setBlogImage] = useState(null);
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [updateBlogId, setUpdateBlogId] = useState(null);
    const [content, setContent] = useState('');
    const [descriptions, setDescriptions] = useState([]);

    function Insert() {

        let data =
        {
            cId: 2,
            iParentCatID: 5,
            vBlogTitle: document.getElementById('blog_title').value,
            vBlogDescription: document.getElementById('blog_title').value,
            // vBlogFeatureImage: '',
            // vBlogThumbnailImage: '',
            tCreatedDate: new Date().toISOString().slice(0, 10),
            tUpdatedDate: '2023-05-05'
        };

        fetch(`${Api_url}/blog`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                // 'Content-Type': 'multipart/form-data',
                'Content-Type': 'appilcation/json',
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(result => {
                console.log(result)
                // let Description = {
                //     bId: result.data.bId,
                //     vBlogDescription: descriptions.join(','),
                //     description_img: '',
                //     tCreatedDate: new Date().toISOString().slice(0, 10),
                //     tUpdatedDate: '2021-06-21',
                // }
                // console.log(Description);
                // axios.post(`${Api_url}/description/`, Description)
                //     .then(resp => console.log(resp))
            }
            )
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
    }
    const handleShow = () => {
        getCategory();
        setShow(true);
    }

    const handleAddDescription = () => {
        setDescriptions([...descriptions, '']);
    };

    const handleDescriptionChange = (index, value) => {
        const updatedDescriptions = [...descriptions];
        updatedDescriptions[index] = value;
        setDescriptions(updatedDescriptions);
    };

    const handleRemoveDescription = (index) => {
        const updatedDescriptions = descriptions.filter((_, i) => i !== index);
        setDescriptions(updatedDescriptions);
    };

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
                                <td dangerouslySetInnerHTML={{ __html: item.vBlogDescription }}></td>
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
                            <label htmlFor={`blog_discription`}>Blog Description</label>
                            <input type="text" className="form-control" id="blog_discription" aria-describedby="" placeholder="Blog Discription" />
                            {descriptions.map((description, index) => (
                                <div key={index} className="form-group">
                                    <ReactQuill
                                        className='my-3'
                                        value={description}
                                        onChange={(value) => handleDescriptionChange(index, value)}
                                        id={`blog_discription_${index}`}
                                    />
                                    <Button variant='danger' onClick={() => handleRemoveDescription(index)}>Remove</Button>
                                </div>
                            ))}
                        </div>
                        <Button className='my-2' onClick={handleAddDescription}>
                            Add addition blog description
                        </Button>
                        <div className="form-group">
                            <label htmlFor="Image">Image</label>
                            <input className='form-control' accept="image/*" type="file" name="" id="BlogFeatureImage" onChange={(e) => setBlogImage(e.target.files[0])} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Image">Thumbnail Image</label>
                            <input className='form-control' accept="image/*" type="file" name="" id="ThumbnailImage" onChange={(e) => setThumbnailImage(e.target.files[0])} />
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
