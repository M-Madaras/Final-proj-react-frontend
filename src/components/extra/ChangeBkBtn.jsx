<div class="ImageWrapper">
            <img src="https://pbs.twimg.com/media/CjzfmDJUYAA9Mmv.png" />
          </div>


    document.querySelector( "button" )
      .addEventListener( "click", function () {
        var wrapper = document.querySelector( ".ImageWrapper" );
        var color = wrapper.style.backgroundColor || "white";
        wrapper.style.backgroundColor = color === "white" ? "black" : "white"; 
      } );


        //        <Header>

        //   <Menu
        //     theme="dark"
        //     mode="horizontal"
        //     defaultSelectedKeys={['1']}
        //   >

        //     <Space split={<Divider type="vertical" />}>
        //       <DropdownBar />
        //       <br />
        //       <Avatar size={48} icon={<UserOutlined />} />
        //       <Space >

        //       </Space>

        //       <h2>-  Welcome To My Goal Setter App -</h2>

        //       <br />
        //       <br />
        //       <br />

        //       <Menu.Item key="0">
        //         <Link className='li2' to="/Signup">Sign Up</Link>
        //       </Menu.Item>
        //       <Menu.Item key="1">
        //         <Link className='li2' to="/">Goals</Link>
        //       </Menu.Item>
        //       <Menu.Item key="2">
        //         <Link className='li2' to="/Login">Login</Link>
        //       </Menu.Item>
        //       <Menu.Item key="3">
        //         <Link className='li2' to="/Logout">Logout</Link>
        //       </Menu.Item>
        //     </Space>
        //   </Menu> 

        // </Header> 