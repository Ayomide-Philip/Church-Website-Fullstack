export async function createLeader(req, res, next) {
    try {
        res.json({message: "Create Leader"});
    }catch(err){
        next(err);
    }
}