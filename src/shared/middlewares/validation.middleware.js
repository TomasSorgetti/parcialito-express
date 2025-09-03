import { validationResult } from "express-validator";
import {
  InvalidInputError,
  MissingFieldError,
  ERROR_CODES,
} from "../errors/index.js";

export default class ValidationMiddleware {
  constructor(validations) {
    this.validations = validations;
  }

  middleware() {
    return [
      ...this.validations,
      (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          const errorDetails = errors.array().reduce((acc, err) => {
            const field = err.path || err.param || "unknown_field";
            acc[field] = {
              message: err.msg,
              value: err.value !== undefined ? err.value : null,
              location: err.location || "unknown",
            };
            return acc;
          }, {});

          const isMissingField = errors
            .array()
            .some(
              (err) =>
                err.msg.toLowerCase().includes("requerido") ||
                err.msg.toLowerCase().includes("required")
            );
          const ErrorClass = isMissingField
            ? MissingFieldError
            : InvalidInputError;
          const errorCode = isMissingField
            ? ERROR_CODES.VALIDATION.MISSING_FIELD
            : ERROR_CODES.VALIDATION.INVALID_INPUT;

          throw new ErrorClass("Validation errors found", {
            fields: errorDetails,
          });
        }

        next();
      },
    ];
  }
}
