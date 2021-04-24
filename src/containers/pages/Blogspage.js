import React, { useEffect } from "react";
import { Form, Button, FormControl, Table } from "react-bootstrap";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../../redux/actions/blog.action";

const Blogspage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(blogActions.getBlogs());
  }, []);
  return (
    <div>
      <h1>Blog Manage</h1>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Review Count </th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{blogs && blogs.map((blog) => <p>{blog.title}</p>)}</td>
              <td>{blogs && blogs.map((blog) => <p>{blog.author.name}</p>)}</td>
              <td>Table cell</td>
              <td>
                <p>
                  {blogs &&
                    blogs.map((blog) => (
                      <p>
                        <Moment>{blog.author.createdAt}</Moment>
                      </p>
                    ))}
                </p>
              </td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Blogspage;
