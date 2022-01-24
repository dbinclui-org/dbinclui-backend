import { Request, Response } from 'express';
import GuidesRepository from '@repositories/GuidesRepository';
import bindedInstance from '@utils/bindedInstance';

export class GuidesController {
  private repository: GuidesRepository;

  constructor() {
    this.repository = new GuidesRepository();
  }

  async getGuides(req: Request, res: Response) {
    try {
      const guides = await this.repository.list();
      res.status(200).json({ data: guides });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }

  async registerGuide(req: Request, res: Response) {
    try {
      const guides = await this.repository.create(req.body);
      res.status(200).json({ data: guides });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }

  async getWithCategoriesAndContent(req: Request, res: Response) {
    try {
      const guide = await this.repository.getWithCategoriesAndContent(req.params.guideId);
      res.status(200).json({ data: guide });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }

  async updateGuide(req: Request, res: Response) {
    try {
      const guides = await this.repository.update(req.params.id, req.body);
      res.status(200).json({ data: guides });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }
}

export default bindedInstance(GuidesController);
