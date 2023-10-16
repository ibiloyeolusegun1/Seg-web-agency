import React from 'react'
import "./Blog.css"

const Blog = () => {
  return (
    <section className="blog" id='blog'>
        <div className="blog-container padding inner-w">
            <h1>Blog</h1>
            <div className="blog-card">
                <div className="card-box">
                    <div className="bg-blue"></div>
                    <div className="image">
                        <img src="./blog1.jpg" alt="" width={300}/>
                        <span>Tech</span>
                    </div>
                    <div className="details">
                        <div className="dateBx">
                            <span>09/22/2023</span>
                            <span>2045</span>
                        </div>
                        <h3>SEO Made Easy</h3>
                        <p>Lorem ipsum dolor ugit pariatur nam eligend sit amet consectetur, adipisicing elit. Debitis quaerat fugit pariatur nam eligendi quae laudantium incidunt quaerat fugit pariatur nam eligendi quae.</p>
                    </div>
                </div>
                <div className="card-box">
                    <div className="bg-blue"></div>
                    <div className="image">
                        <img src="./blog2.jpg" alt="" width={300}/>
                        <span>Tech</span>
                    </div>
                    <div className="details">
                        <div className="dateBx">
                            <span>09/22/2023</span>
                            <span>5608</span>
                        </div>
                        <h3>Apply For Programming</h3>
                        <p>Lorem ipsum dolor ugit pariatur nam eligend sit amet consectetur, adipisicing elit. Debitis quaerat fugit pariatur nam eligendi quae laudantium incidunt quaerat fugit pariatur nam eligendi quae.</p>
                    </div>
                </div>
                <div className="card-box">
                    <div className="bg-blue"></div>
                    <div className="image">
                        <img src="./blog3.jpg" alt="" width={300}/>
                        <span>Tech</span>
                    </div>
                    <div className="details">
                        <div className="dateBx">
                            <span>09/22/2023</span>
                            <span>0195</span>
                        </div>
                        <h3>Google Latest Smartphone</h3>
                        <p>Lorem ipsum dolor ugit pariatur nam eligend sit amet consectetur, adipisicing elit. Debitis quaerat fugit pariatur nam eligendi quae laudantium incidunt quaerat fugit pariatur nam eligendi quae.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog
