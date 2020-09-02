<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>Laravel</title>
    </head>
    <body>
        
       <div class="container p-4">
        <div class="jumbotron text-center p-2">
            <p class="lead"><b>Finance Atlasware - API Guide</b></p>
        </div>
        <div class="alert alert-light text-center" role="alert" style="border:1px solid #f3f3f3">
        Exemplo: <a href="http://finance.atlasware.com.br/api/category/2">http://finance.atlasware.com.br/api/category/2</a>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>MetHod</th>
                    <th>Endpoint</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-primary"><td colspan="3"><small><b>** Categorias</b></small></td></tr>
                <tr>
                    <td>Cadastro de novas categorias<br/>
                        <small><b>'name'</b></small>: Maximo de 255 caracteres, Minimo de 4</td>
                    <td><span class="text-success font-weight-bold">POST</span></td>
                    <td><b>api/category</b></td>
                </tr>
                <tr>
                    <td>Consulta de todas as categorias</td>
                    <td><span class="text-primary font-weight-bold">GET</span></td>
                    <td><b>api/category</b></td>
                </tr>
                <tr>
                    <td>Consulta de uma categoria especifica pelo id</td>
                    <td><span class="text-primary font-weight-bold">GET</span></td>
                    <td><b>api/category/{id}</b></td>
                </tr>
                <tr>
                    <td>Editar uma categoria especifica<br/>
                        <small><b>'name'</b></small>: Maximo de 255 caracteres, Minimo de 4</td>
                    <td><span class="text-warning font-weight-bold">PUT</span></td>
                    <td><b>api/category/edit/{id}</b></td>
                </tr>
                
                 <tr>
                    <td>Deletar categoria pelo id</td>
                    <td><span class="text-danger font-weight-bold">DELETE</span></td>
                    <td><b>api/category/{id}</b></td>
                </tr>
                <tr class="table-primary"><td colspan="3"><small><b>** Transações</b></small></td></tr>
                <tr>
                    <td>Consulta de transações realizadas</td>
                    <td><span class="text-primary font-weight-bold">GET</span></td>
                    <td><b>api/transaction</b></td>
                </tr>
            </tbody>
        </table>
       </div>
        <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="mb-1">Feito com <3 por Jorge </p>
        </footer>
       <!-- JS, Popper.js, and jQuery -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
</html>
