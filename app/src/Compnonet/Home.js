import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const img1="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99154F4F5EC203DE27";
    return (
        <div className='container mt-5 home-container'> 
            <div className='row'>
                <div className='col-md-6 '>
                <img src={img1} alt='home' className='img-fluid' />
                </div>
                 <div className='col-md-6'>
                     <h1 className='text-muted fe-bold'>토이프로젝트-Camucamu</h1> 
                     <p className='mt-3 '>
                     팀장 : 윤순상 </p>
                     <p>팀원 : 김태교 권재성 유태균 유성욱 </p>  
                     <p>파이팅!!</p>
                     <Link className='btn bg-success text-white mt-5' to="/blog">Read Blog</Link>           
                </div>
                

            </div>
        </div>
    )
}
