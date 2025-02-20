use rspack_error::Result;

use crate::{
  CodeGeneratable, CodeGeneratableContext, CodeGeneratableResult, Dependency, ModuleIdentifier,
  RuntimeGlobals,
};

#[derive(Debug, Eq, PartialEq, Clone, Hash)]
pub struct RuntimeRequirementsDependency {
  pub runtime_requirements: RuntimeGlobals,
}

impl Dependency for RuntimeRequirementsDependency {
  fn parent_module_identifier(&self) -> Option<&ModuleIdentifier> {
    None
  }
}

impl CodeGeneratable for RuntimeRequirementsDependency {
  fn generate(
    &self,
    code_generatable_context: &mut CodeGeneratableContext,
  ) -> Result<CodeGeneratableResult> {
    code_generatable_context
      .runtime_requirements
      .add(self.runtime_requirements);

    Ok(CodeGeneratableResult::default())
  }
}

impl RuntimeRequirementsDependency {
  pub fn new(runtime_requirements: RuntimeGlobals) -> Self {
    Self {
      runtime_requirements,
    }
  }
}
