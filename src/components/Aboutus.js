import React from 'react'
import './aboutus.css';
import img1 from './images/6.jpg';
import img2 from './images/4.jpg';

export default function Aboutus() {
  return (
    <div>
        <div className='Boxa1'>
        <table>
            <tbody>
                <tr>
                    <td><img src={img1} className='im1' ></img></td>
                    <td  >
                        <div className='ta3'>
                        <h1 className='ha1'>Welcome</h1>
                        <p>We warmly welcome you to KIU Smart Cafeteria.We are very dedicated to provide you a wonderfull
                            dinning Service.We offers variety of lunch options for you to decide with your prference. whether you student
                            or staff member you can exprience this amazing opportunity by placeing orders. Join us at KIU Smart Cafeteria
                        </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>

        <div className='Boxa2'>
        <table>
            <tbody>
                <tr>
                    <td className='ta1'><h1 className='ha1'>About Us</h1></td>
                    <td className='ta2'>We are one and only cafeteria at Kiu Which provide Seamless foods with a good reputation.KIU Students
                        and past pupils are the main stakeholders of this cafeteria.Our main goal is to provide healthy ,nutrious and 
                        low cost meals to every customer.Taking that as our vision We proudly introduce KIU Smart Cafeteria.
                    </td>
                    <td className='ta1'>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>

        <div className='Boxa3'> 
        <table>
            <tbody>
                <tr>
                    <td >
                        <div className='ta4'>
                        <h1>Contact Us</h1>
                        <div className='ta5'>
                            <ul>
                                <li>jj</li>
                                <li>jj</li>
                                <li>jj</li>
                                <li>jj</li>
                            </ul>
                        </div>
                        </div>
                    </td>
                    <td>
                    <img  src={img2}  className='im2'></img>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}
