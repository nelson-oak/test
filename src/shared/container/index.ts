import { container } from 'tsyringe';

import '@shared/container/providers';
import '@modules/users/users.module';
import context from '@shared/container/modulesContext';

context.metadata.forEach(module => {
  module.providers?.forEach(provider => {
    container.registerSingleton(provider.provideAs, provider.useClass);
  });
});
