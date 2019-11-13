<div>{console.log(props.currentUser)}
     <div className="responsive_view">TEST RESPONSIVE</div>
     <div className="account__content">
     <div className="account__content_grid_items" >
     <div className="active-option"><img src={props.currentUser.avatar}/>
     <div style={{height:"19rem",overflow: "scroll"}}><h3>Purchase History</h3>
     
     

       {props.currentUser.orders.map(order=> <React.Fragment>
         <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell>Order No.{order.id}</Table.HeaderCell>
         <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Purchase Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
         
        
        {order.products.map(product=>
          <React.Fragment><Table.Row >
         <Table.Cell>
       
        </Table.Cell><Table.Cell>{product.title}</Table.Cell>
          <Table.Cell>{orderDate(order.created_at)}</Table.Cell> </Table.Row></React.Fragment>
        )}
        
        
       
         </Table.Body>
      </Table>
        </React.Fragment>)} 
        
      
        
      
 
  
 </div>
      </div>
     </div>
  </div></div>