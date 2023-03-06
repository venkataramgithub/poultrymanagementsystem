const express=require("express");
const connection=require("../connection");
const router=express.Router();


router.post('/work',(req,res)=>{
	connection.query("insert into workers set?",req.body,(err,result)=>{
		if(err){
			res.send({
				error:err,
			});
			console.log(err);
		}
		else{
			res.json({
				submit:true,
			});
			console.log(result);
		}
	});
});

router.get('/allwork',(req,res)=>{
	connection.query("select * from workers",(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
		}
	});
});

router.post("/exp",(req,res)=>{
	connection.query("insert into expenses set?",req.body,(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				submit:true
			});
		}
	});
});

router.get("/allexp",(req,res)=>{
	connection.query("select * from expenses",(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
		}
	});
});

router.post("/pri",(req,res)=>{
	connection.query("insert into price set?",req.body,(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				submit:true
			});
		}
	});
});

router.get("/allprices",(req,res)=>{
	connection.query("select * from price",(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
		}
	});
});


router.post("/pper",(req,res)=>{
	connection.query("insert into pperson set?",req.body,(error,result)=>{
		if(error){
			res.json({
				error:errror,
			});
		}
		else{
			res.json({
				submit:true
			});
		}
	});
});

router.get("/allpperson",(req,res)=>{
	connection.query("select * from pperson",(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
		}
	});
});

router.post("/pdet",(req,res)=>{
	connection.query("insert into pdetails set?",req.body,(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				submit:true
			});
		}
	});
});

router.get("/allpdetails",(req,res)=>{
	connection.query("select * from pdetails where itemname=?",["chicken"],(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
		}
	});
});

router.post("/sper",(req,res)=>{
	connection.query("insert into sperson set?",req.body,(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				submit:true,
			});
		}
	});
});

router.get("/allsperson",(req,res)=>{
	connection.query("select * from sperson",(error,result)=>{
		if(error){
			res.json({
				error:error,
			});
		}
		else{
			res.json({
				result:result,
			});
		}
	});
});

router.post("/sdet",(req,res)=>{
	connection.query("insert into sdetails set?",req.body,(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				submit:true
			});
		}
	});
});

router.get("/allsdetails",(req,res)=>{
	connection.query("select * from sdetails",(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
		}
	});
});

router.post("/wastage",(req,res)=>{
	connection.query("insert into wastages set?",req.body,(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				submit:true
			});
		}
	});
});

router.get("/dashboardvalues",(req,res)=>{
	connection.query("select * from price",(err,result)=>{
		if(err){
			res.send({
				error:err,
			});
		}
		else{
			res.send({
				date:result[result.length-1], 
			});
		}
	})
});

router.get("/allvalues",(req,res)=>{
	connection.query("select * from sperson",(err1,sperson)=>{
		if(err1){
			res.json({
				error:err1,
			});
		}
		else{
			connection.query("select * from sdetails",(err2,sdetails)=>{
				if(err2){
					res.json({
						error:err2,
					});
				}
				else{
					connection.query("select amount from expenses",(err3,expenses)=>{
						if(err3){
							res.json({
								error:err3,
							});
						}
						else{
							connection.query("select quantity from pdetails where itemname=?",["chicken"],(err4,pdetails)=>{
								if(err4){
									res.json({
										error:err4,
									});
								}
								else{
									let quantity=0;
									for(let j=0;j<sdetails.length;j++){
										if(sdetails[j].itemname=="chicken"){
											quantity=quantity+sdetails[j].quantity;
										}
									}
									let pdcount=0;
									for(let k=0;k<pdetails.length;k++){
										pdcount=pdcount+pdetails[k].quantity;
									}
									let totalchicken=pdcount-quantity;
									let count=0;
									for(let i=0;i<expenses.length;i++){
										count=count+expenses[i].amount;
									}
									res.json({
										sperson:sperson.length,
										sdetails:sdetails.length,
										expenses:count,
										totalchicken:totalchicken
									});
								}
							});
						}
					});
				}
			});
		}
	});
});

router.get("/allwastages",(req,res)=>{
	connection.query("select * from wastages",(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
		}
	});
});

router.post("/workersearch",(req,res)=>{
	const data=req.body.workersearch;
	connection.query("select * from workers where name=?",[data],(error,result)=>{
		if(error){
			res.send({
				error:error
			});
		}
		else{
			res.send({
				data:result,
			});
		}
	});
});
 
router.post("/eggproduction",(req,res)=>{
	connection.query("insert into eggproduction set?",req.body,(error,result)=>{
		if(error){
			res.send({
				error:error,
			});
		}
		else{
			res.send({
				submit:true
			});
		}
	});
});

router.post("/pricesearch",(req,res)=>{
	const data=req.body.pricesearch;
	connection.query("select * from price where date=?",[data],(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
			console.log(result);
		}
	});
});

router.get("/geteggs",(req,res)=>{
	connection.query("select * from eggproduction",(error,result)=>{
		if(error){
			res.json({
				error:error
			});
		}
		else{
			res.json({
				result:result
			});
		}
	});
});

module.exports=router;