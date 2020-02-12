import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string()
        .required()
        .uppercase()
        .length(2),
      city: Yup.string().required(),
      postalcode: Yup.string()
        .required()
        .length(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const {
      id,
      name,
      address,
      number,
      complement,
      state,
      city,
      postalcode,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      address,
      number,
      complement,
      state,
      city,
      postalcode,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
      state: Yup.string()
        .required()
        .uppercase()
        .length(2),
      city: Yup.string().required(),
      postalcode: Yup.string()
        .required()
        .length(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(401).json({ error: 'Recipient not found.' });
    }

    const {
      id,
      name,
      address,
      number,
      complement,
      state,
      city,
      postalcode,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      address,
      number,
      complement,
      state,
      city,
      postalcode,
    });
  }
}

export default new RecipientController();
