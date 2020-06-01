import { FormlyFieldConfig } from '@ngx-formly/core';

export class Contato{
    nome: string;
    telefone: string;
    email: string;

    formFields(){
        return <FormlyFieldConfig[]>[
            {
                key: 'nome',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Nome',
                    placeholder: 'Nome',
                    required: true
                },
                validation: {
                    messages:{
                        required: 'Favor informar um nome'
                    }
                }

            },
            {
                key: 'telefone',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Telefone',
                    placeholder: 'Telefone',
                    required: true
                },
                validation: {
                    messages:{
                        required: 'Favor informar um Telefone'
                    }
                }

            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'E-mail',
                    placeholder: 'E-mail',
                    required: true
                },
                validation: {
                    messages:{
                        required: 'Favor informar um E-mail'
                    }
                }

            }
        ]
    }
}