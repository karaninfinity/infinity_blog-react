import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import Api_url from '../../Request';
import { Button, Modal, Table } from 'react-bootstrap'

const Blogs = () => {

    const [Data, setData] = useState([]);
    const [Show, setShow] = useState(false);
    const [Category, setCategory] = useState([]);
    const [Subcategory, setSubcategory] = useState([]);
    const [Selcategory, setSelcategory] = useState('');

    const [deleteId, setDeleteId] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        fetch(`${Api_url}app/category`, {
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

    useEffect(() => {
        axios.get(`${Api_url}/app/blog`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
            .then(resp => {
                console.log(resp.data);
                setData(resp.data)
            })
    },
        [])
    useEffect(() => {
        getSubcategory();
    }, [Selcategory])
    function getSubcategory() {

        axios.get(`${Api_url}/category/iParentCatID/` + Selcategory, {
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
    function Insert() {

        let data = {
            cId: document.getElementById('Subcategory').value,
            iParentCatID: document.getElementById('Category').value,
            vBlogTitle: document.getElementById('blog_title').value,
            vBlogDescription: document.getElementById('blog_discription').value,
            vBlogFeatureImage: document.getElementById('BlogFeatureImage').value,
            vBlogThumbnailImage: document.getElementById('ThumbnailImage').value,
            tCreatedDate: new Date().toISOString().slice(0, 10),
            tUpdatedDate: "2023-05-05",
        }

        fetch(`${Api_url}/app/blog`, {

            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
            .then(result => console.log(result))
    }

    let DeleteBlog = (e) => {
        setDeleteId(e.target.id);
        fetch(`${Api_url}/app/blog/bId` + deleteId, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
            .then(resp => resp.json())
            .then(result => console.log);
    }

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
                                    <Button> Update </Button>
                                    <Button id={item.bId} className='ms-2' variant='danger' onClick={DeleteBlog}> Delete </Button>
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
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <select onChange={(e) => { setSelcategory(e.target.value) }} id='Category' className="form-select my-2" aria-label="Default select example">
                            <option selected>Select Category</option>
                            {
                                Category.map(item => (
                                    <option value={item.cId}>{item.vCategoryName}</option>
                                ))
                            }
                        </select>
                        <select className="form-select" id='Subcategory' aria-label="Default select example">
                            <option selected>Subcategory</option>
                            {
                                Subcategory.map(item => (
                                    <option value={item.cId}>{item.vCategoryName}</option>
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
                            <input className='form-control' type="file" name="" id="BlogFeatureImage" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Image">Thumbnail Image</label>
                            <input className='form-control' type="file" name="" id="ThumbnailImage" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Insert}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Blogs
