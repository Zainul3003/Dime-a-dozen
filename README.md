### :rocket: Project: Dime-a-Dozen
    Dime-a-Dozen is a webapp developed for connecting local shops to their regular customers by online
    mode and thus also maintaining social distancing, here shops can ask for donation if they really 
    need some funding, shops can also put up advertisements for offers.
### :dart: Final prototye of project: 
    The final prototype of our project is able to perform these actions.
    1. Login/Register a new user as a customer.
    2. Login/Register a new user as a shop owner.
    3. Shop owner can add his/her shop to our website.
    4. Donation feature for shops who need donation.
    5. Customers will be able to see shops and number of people in queue at that shop in his/her area.
       For performing this filter process customer will follow these three steps.
       a) First filter on the basis of pin code.
       b) Second filter on the basis of area/locality.
       c) Third filter on the basis of shop name.
    6. Customer will be able to add himself to queue at any shop with the list of goodies needed by registering through his phone number.
    7. Customer will receive a message at the time of registering and one other message X minute before he/she should visit the shop.
    8. Shop owner will be able to show offers of his/her shop.
    9. Shop owner will be able to modify queue on the basis of FIFO (First in first out algorithm).
 

### :computer: Techs we used:
    1. Node.js
    2. Express.js
    3. SMS API.
    4. HTML
    5. CSS
    6. Javascript
    7. Mongodb
    8. Passport

### :clipboard: Work-flow: 
    This is the logical order we followed for building our webapp (Except of unwillingness Bugs) 
    General:
    Local-server -> Landing page -> Basic-info on landing page -> Login/Sign up feature ->
    Donation and Add Shop feature

    From customers perspective:
    Search box for pincode filters -> Drop down for unique area in this pincode range -> Display Shops list in that area ->
    Display selected Shop's all info -> Adding himself/herself to queue -> Successful page

    From shop owners perspective:
    Shop owners dash board -> Editing of offers etc. info -> Deque feature -> Mesaage to customer feature
    
   :zap: Anyone can test live working model <a href="https://five-n-dime.herokuapp.com/" target="_blank">here</a>.

### :boy: Dummy customer:
    You can Register/Login with your own Email Id or you can use our dummy data
    1.Customer-1
      a) Email: mayank@gmail.com
      b) Password: mayank1234 

    2.Customer-2
      a) Email: aadya@gmail.com
      b) Password: 12345678 
#### :zap: You can check the shop searching and adding to queue functionality (customers perspective) using these dummy pincodes:
    a) 226021
    b) 226022

### :older_man: Dummy shopowners:
    You can either use our dummy data or you can register your own dummy shop using you own credentials
    1.Shopowner-1
      a) Email: vikram@gmail.com
      b) Password: 12345678 

    2.Shopowner-2
      a) Email: shop2@gmail.com
      b) Password: 12345678

### :pushpin: Note:
    a) If you want to receive messages after adding yourself to queue, use your real phone number during queue addition.
    b) Messege facility will not be available from 9 PM to 9 AM.

### :hammer_and_wrench: Installation:
    1. Cloning repository.
          git clone <repo link> or locally download zip folder.
          
    2. Install all dependencies.
          npm install
          
    3. Set all enviorement variables in .env file.
          mongodburl=<MONGODB URI>
          API_KEY=<SMS API key>
       
    4. Run web-app on local host.
          node server (entry js file)
       
### :wrench: Contributing:
     If you have any idea to improve any functionality of our web-app or you want to add any new feature in our web app.
     You can do that by making some good, valid Pull requests in our repository.
     
