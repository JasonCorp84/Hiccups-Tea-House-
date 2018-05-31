import React, { Component } from 'react';
import { Table } from 'reactstrap';
import dummyData from './dummyData';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <h1>Master Sanitation Schedule</h1>
           <strong>Directions:</strong> This log is to be used each business day to ensure we effectively wash, rinse, & sanitize our equipment. If you are unsure or have any questions please ask a shift lead. The shift lead on-duty will appropriately assign the task listed below.

                  <Table hover>
        <thead>
            
          <tr>
            {dummyData.map((e,i)=> {
            return <td key={i}><strong>{e}</strong></td>
            })}
          </tr>
        </thead>
        <tbody>
          <tr className='column'>
            <th scope="row">1</th>
            <td>Shakers ( + lids & caps)</td>
            <td>4 hours</td>
            <td>10:00 AM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">2</th>
            <td>Milk Tea Blenders</td>
            <td>4 hours</td>
            <td>10:00 AM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">3</th>
            <td>Smoothie Blenders</td>
            <td>4 hours</td>
            <td>10:00 AM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">4</th>
            <td>1-2oz Measurements</td>
            <td>4 hours</td>
            <td>10:00 AM</td>
            <td>.</td>
            <td>.</td>
          </tr >
          <tr className='column'>
            <th scope="row">5</th>
            <td>Shakers ( + lids & caps)</td>
            <td>4 hours</td>
            <td>2:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">6</th>
            <td>Milk Tea Blenders</td>
            <td>4 hours</td>
            <td>2:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">7</th>
            <td>Smoothie Blenders</td>
            <td>4 hours</td>
            <td>2:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">8</th>
            <td>1-2oz Measurements</td>
            <td>4 hours</td>
            <td>2:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">9</th>
            <td>Shakers ( + lids & caps)</td>
            <td>4 hours</td>
            <td>6:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">10</th>
            <td>Milk Tea Blenders</td>
            <td>4 hours</td>
            <td>6:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">11</th>
            <td>Smoothie Blenders</td>
            <td>4 hours</td>
            <td>6:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">12</th>
            <td>1-2oz Measurements</td>
            <td>4 hours</td>
            <td>6:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">13</th>
            <td>Shakers ( + lids & caps)</td>
            <td>4 hours</td>
            <td>10:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">14</th>
            <td>Milk Tea Blenders</td>
            <td>4 hours</td>
            <td>10:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">15</th>
            <td>Smoothie Blenders</td>
            <td>4 hours</td>
            <td>10:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
          <tr className='column'>
            <th scope="row">16</th>
            <td>1-2oz Measurements</td>
            <td>4 hours</td>
            <td>10:00 PM</td>
            <td>.</td>
            <td>.</td>
          </tr>
        </tbody>
      </Table>
        </div> 
        )
    }
}
 
export default Form;