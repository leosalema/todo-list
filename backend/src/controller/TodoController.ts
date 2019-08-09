import { Request, Response } from 'express'

import Todo from '../schema/Todo'
import { ObjectId } from 'bson';

class TodoController {
    public async index (req: Request, res: Response): Promise<Response> {
        const todo = await Todo.find()
        return res.json(todo)
    }

    public async findId (req: Request, res: Response): Promise<Response> {
        const todo = await Todo.findById(req.params.id) 
        return res.json(todo)
    }

    public async create (req: Request, res: Response): Promise<Response> {
        const todo = await Todo.create(req.body)

        return res.json(todo) 
    }

    public async update (req: Request, res: Response): Promise<Response> {
        const todo = await Todo.updateOne({_id: new ObjectId(req.params.id)}, req.body)
        return res.json(todo)
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        const todo = await Todo.deleteOne({_id: new ObjectId(req.params.id)})
        return res.send('Registro excluido com sucesso!')
    }
}

export default new TodoController()