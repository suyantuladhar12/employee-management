import { UserModel } from "../postgres/postgres.js"

export const getAllEmp=async(req,res)=>{
    try{
        const users= await UserModel.findAll();
        if(users.length==0){
            return res.status(200).json({"error":"users not found"})
        }
        return res.status(200).json(users)
    }catch{error}{
        console.log(error)
        return res.status(500).json({"error":"Internal Server Error"})
    }
}

export const addEmp=async(req,res)=>{
    const {name,email,designation,empId} = req.body;
    try{
        const emp=await UserModel.findOne({where:{empId:empId}})
        if(emp==null){
            await UserModel.create(req.body);
            return res.status(201).json({message:"emp added successfully"})
        }
        return res.status(200).json({message:"Already Found"})

    }catch(error){
            console.log(error)
            return res.status(500).json({"error":"Internal Server Error"})
    }
}

export const updateEmp = async(req,res)=>{
    let empId = req.params.empId;
    try{
        const emp=await UserModel.update(req.body,{where:{empId}})
        if(emp[0]==0){
            return res.status(404).json({message:"Not Found"})    
        }
        console.log(emp)
        return res.status(200).json({message:"updated successfully"})
    }catch(error){
        console.log(error)
        return res.status(500).json({"error":"Internal Server Error"})
    }
}

export const deleteEmp = async(req,res)=>{
    let empId = req.params.empId;
    try{
        const emp=await UserModel.findOne({where:{empId:empId}})
        if(emp==null){
            return res.status(404).json({message:"emp Not Found"})
        }
        await emp.destroy()
        return res.status(200).json({message:"Deleted Successfully"})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({"error":"Internal Server Error"})
    }
}