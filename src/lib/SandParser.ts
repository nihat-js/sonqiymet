import AutoBrand from "../database/sequelize/models/AutoBrand";
import AutoModel from "../database/sequelize/models/AutoModel";

// const models = {
//   "AutoBrand": AutoBrand,
//   "AutoModel": AutoModel
// };



// export const t = {
//   in: "in",
//   required: "required",
//   integer: "integer",
//   string: "string",
//   email: "email",
//   exists: "exists",
//   max: "max",
//   array: "array",
// }


export async function safeParse(data, rules) {
  let result = { error: null };

  for (let [field, fieldRules] of Object.entries(rules)) {
    // fieldRules = fieldRules.split("|");// array

    const item = data?.[field] ?? null;

    for (const rule of fieldRules) {
      let ruleName, ruleDefinition
      if (typeof rule === "string") {
        ruleName = rule;
      }
      if (typeof rule === "object") {
        ruleName = Object.keys(rule)[0];
        ruleDefinition = Object.values(rule)[0];
      }

      // ---------

      if (ruleName == "optional" && (item == null || item !== undefined || item !== "" || item?.length == 0)) {
        break;
      }

      if (ruleName == "required") {
        if (item === null || item === undefined || item === "" || item?.length == 0) {
          result.error = `${field} is required`;
          return result;
        }
      }


      if (ruleName == "string") {
        if (typeof item !== "string" || item === "") {
          result.error = `${field} must be a string`;
          return result;
        }
      }

      if (ruleName == "integer") {
        if (!Number.isInteger(item)) {
          result.error = `${field} must be an integer`;
          return result;
        }
      }

      if (ruleName == "array") {
        if (!Array.isArray(item)) {
          result.error = `${field} must be an array`;
          return result;
        }
      }

      if (ruleName == "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(item)) {
          result.error = `${field} must be a valid email`;
          return result;
        }
      }

      if (ruleName == "min") {
        if (typeof item === "string" && item.length < ruleDefinition) {
          result.error = `${field} must be at least ${ruleDefinition} characters`;
          return result;
        }
        if (typeof item === "number" && item < ruleDefinition) {
          result.error = `${field} must be at least ${ruleDefinition}`;
          return result;
        }
      }

      if (ruleName == "max") {
        if (typeof item === "string" && item.length > ruleDefinition) {
          result.error = `${field} must be at most ${ruleDefinition} characters`;
          return result;
        }
        if (typeof item === "number" && item > ruleDefinition) {
          result.error = `${field} must be at most ${ruleDefinition}`;
          return result;
        }
      }

      if (ruleName === "in") {
        if (item !== null && item !== undefined && !ruleDefinition.includes(item)) {
          result.error = `${field} must be one of ${ruleDefinition}`;
          return result;
        }
      }
    }
  }
  return result;
}






async function validateExists(definition, item, key, models) {
  if (!item) return { error: `${key} is required` };
  const [model, columnName] = definition.split(",");
  const result = await models[model].findOne({
    where: { [columnName]: item },
    attributes: ["id"],
  });
  if (!result) {
    return { error: `${key} does not exist` };
  }
  return null;
}
