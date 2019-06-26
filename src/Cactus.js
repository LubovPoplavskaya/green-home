import React from 'react';

// компонент react Card
function Card(props) {

    const classes = ['card']

    if (props.card.marked) {
        classes.push('marked')
    }
    return (
        <div className={classes.join(' ')} onClick={props.onMark}>
            <div className="card-img">
                <img
                    src={props.card.img}
                    alt={props.card.name}
                    height="200"
                />
            </div>
            <h3>{props.card.name}</h3>
            <p>{props.card.category}</p>
        </div>
    )
}

// класс наслед от React.Component
class Cactus extends React.Component {
    // обработка клика для подсвечивания карточки

    // выводить список динамически через массив. переменная state. модель данных
    state = {
        cards: [
            {
                marked: false,
                name: 'опунция',
                category: 'кактусы',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_D2Xc6BprQbIk-2XMVrHgBz9Nr4037gFRBgB2njnQPUTFhxA'
            },
            {
                marked: false,
                name: 'алоэ вера',
                category: 'суккуленты',
                img: 'https://avatars.mds.yandex.net/get-pdb/34158/2b6ae50b-aeb3-4330-97c1-f5102257ea63/s1200'
            },
            {
                marked: false,
                name: 'сансевиерия',
                category: 'суккуленты',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUYnB0L03-TBwn46ii58sXuRboJSQa0bxSbLh2J4FDe16ZaEGYA'
            },
            {
                marked: false,
                name: 'хатиора',
                category: 'суккуленты',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Gpo1W7981x6_Z3pRzKv9D38hQab3jQNm_zS9tRp5CO55STB7qg'
            },
            {
                marked: false,
                name: 'эхинокактус грузони',
                category: 'кактусы',
                img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGBkYGRgYGBodGxoYFxgXGh8aHRogHiggHRomGxcYITEjJSorLi4uGCAzODMtNygtLisBCgoKDg0OGhAQGy0lICYtLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABFEAACAQMCBAMFBgQDBgUFAQABAhEAAyESMQQFQVEiYXEGEzKBkUKhscHR8BRScuEWM2IHFSNTkvGCk6LC0lRjc7LiQ//EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QALBEAAgICAgEDAwIHAQAAAAAAAAECESExAxJBEzJRImGRUvAUQnGBkrHRBP/aAAwDAQACEQMRAD8AFtc2ucOUt+EoGLaXCkMrGTBK7wT13ijG48cQXgKNJUjQIkTG0nPT50N/C+/VZTXGCPoInpOKzgOSnhrgZkgNKyDIjGYnEGN+1cjUWr8l+7qjXEJmhSKZ8XbzS+4lcti0RRWaK6C1uKNgN2xHaueYEwB5TXSrWcwSGAPZfvpkwnVtHjwoHMTpMmRjaDS/ieKZJ1cLbU/6tfr1NFniNABB05HXzH3UzPEPcmCNPUNtmSFyI23qiZbjpIF/jlThfd2tKu9wu2kQsBYWIJO5NBcAWY61wFMagck4wBvMR9aE59wNwHUtqARnSAAPPBiKzk3NfdXiudOjSHOc4PyU/pTdU8gexnxdvJYrcSckshx8O/0rrnvFEFfdsvu40ISQJAG+YnrUHH8+P80/X9arnHXjdUwCdLAwB3mYHrFaMBKQ/wCTcNf1uwKEESSHB0x3g084fhkdH94QS7b7ER2PzNVr2f43TYfBADeIxjbAP0NM/dhsIxKxJbpqMbfWpzWRlvCObPB27eFuOQTiCJxj556VDz3igGAWdBwCT5gT99FtZQL4kLPO6nywPWYqC5yZSre8OxEKDkAjaepgT86Cl8juLeDXL+GdtNwkKAR4TvksQfoaO47ixDEHaFUdJ7/vyoq2VW3/AJZ8K+GBgCOp3Jilz8LaZQwYyp1FFH5+uKClknKGMElwKGVPtBC2rqGJmQe9I+Me+WwrtnDQTIwd/Q1He5g3juHd8DyFcpzL3htKC4jBCtpnOMjyirqO2xYrJLd4W8ASVJEp6wo7etA/w9/VqKHqfrVzRiFC6RAz4mk5zk5J6/Sqpza4+strOljIgkD0jpSRneCnSL0a4ZrqyzAqIzOBHbO/96GPFqdJ1v4RHwjP31vguD9+5TVCqJY774AqycNyXhUWINxoIJaQAYMHHSYoT5IxdMaMEVAXVUQGcz5Afn+5qzcmvG3bUbBgSNjBMik3C8qvjiSltBce0puH4dOhRl8mIEirt7zi7ZKPcRWESPdoYkA9PWtyy+lP5GhxqbpYEf8AHH/nN/6f0rdPP4y//wAxP/KWsqHaPx+/wW/h5/q/f5JvZa+qhQdRLPgAwD5fWfKrMlk6mZrNuDstxyY+SzInoe9VflxW2y9IZfvIFWgcUJjaqvDshCKkqEHNrGlztnONs9vKkl5KtXO7cgN2warvEJUmTlGnQDFbIrphWqZCUaFQcwvrq8TCYAyew7VOKk4j2ctsTca6wmCcKAJ6SZplXkaMWxPfuJcAWcaln0kA/casH8I9tx/xA1tmIHhgqMlZzBjacUBzDkdtLTFCWfwxmT8Q7R0npTjmhBseHGVJk5Cggn7hVVrA6VAnPCqq9uWY6JB0mGJG0jEziK7t8vtsqhpMgEEHGAPr6TTDj+JtMhXUBqAgxid8HvihbFm4Fi2dUbhgc46GcU0a8oWV+GT8LyK0V0gkHc6Vj7p2pfx/IyFDLudxiR9Pr86Z2+IvA6YtiRn4jI9en0rY4a40FiuJnSBMdpP96Z14QFflle9nOYOlxuHuaXRpBDj7QxE7jGKccfGAttEMzuYIBGNsH17V6YnIeGNsA2UfwgmVEmQM7TPX1pJxPIbIINsspnbUSu/nkVGUc2VXInGih8HwjvcMAeE4P2TkSveciCe/YyGdj2euteEwbTMNJ6wNpjYgCDPYjrVu4bgE1bCTM/MdPoKa2EH0xQbihM7KLzLkt2AEONVufTSwY9olZ71zzPkrKPBaCszkDSPsjq3YeKfQV6FoG8D9/s1mgHcA77+e9LcRrkeRcdwOn4rK3GBZeu6gFoE7AsFpHd4a019RdtmySJAQTInBYYM/kRXuHE8stupUqIO47+vWNqr3HezQnXu+otiAFBJIj/UcLJmMxGIpFrwZy+SjcZy20wzxF1fIWjGBHr8poC5yxHAtrcdjssWoBOwU+Lv186sfEcvu2wzX2t21A8JnwzMQSc0t/wAQMG02l1MMApJAyDIAx1xjpQSYZuC0gz2l5ZZ4a/8Aw/D2dJVLSvcUHxOF1EkExMEdRUvLOW+8S6Wf3dq1bZixjUTGMSRljG9AXE4jiLqNfbTqI95BMiftbRPlTf2yvJ/EXFFr/hIFt4kA6dO4WAfF37U0oxk+zJqTSoz2X4QWrPE3596/ultk4AAdx4cnrHTtQPMOL1XTc0ljcbbrkRC9yKhvc9T+EezatsAbq3HKgZVQcEMRiQtJbHtWwZNPRlYHSCZUyMTG9ZwclRlNp4PSv8EN2H1P61lU/wDxlxH8/E/S3+tZW9CA3qz+RK19zdCliYYQAYG9X3+IX+aa894TgrpuG4cGZirHZRqEqYYXEfXbylSPLvSa8KmtrUXEsBviozVBnnIBcFRE13ccdxUD3ANyKCJHStmm157iKCbTtjpB/wC1Ilck+ET+H1q0WePtELqJLDBLSIkAwehA71fjs3jIrtuGBmzcz2AP31Dxl9ChtnUmoFdRBxOOoA286sVhlMj3idfgYbfI9qjvcD721K+7ZT1uZWfMg46VVtmVC/huMMeGy/h9BiQOu8VPe4i4yH/h6dB3YyRgkRH9Jx6VZOD5ZKLrUe8SQYwCMzjr4ZEb5o/huTDxjowI+RMg+uCPnSOQaKjc4t1T3mnwhl1ERtcClSDG3xV1cvymoWjJcqskhZ8UmMzkZ86unAcnVbbKAsFU228BIB+Qjbt0oy1wKgCABBkCNiBAP0Fb1ELQt4K8yW5lsYIJJgiJEZznpQXG8xIkjZQCd+sCOp1GfvFWJ+GBAGY09fWfyoDiuXQJ3aWgYA8USxHU4/8AW3epjMr6cz1aQDGva6fgM/ZWCNxnviJ2pxwPMldiFY6VA8RELuRj5qcdMUFxXJ/CHckBVgoOrN0HzOfzggpGtcReuhjb0WkMAGAFVckgiZ1CPOfKs42ZNouXCcwRk1hhpyAfTqPI0Xb4gE1Rjxtx79u1bte7tpuCnhIBnsQPxMnsKJ4fn+vigmsBRIgdRJ6npjoPnSdWP2Rc24gQKHvXh1IHrVa4Tm4JuJOpgzMhIwYHTy6TsenlD/vtTbLeIsB4kUg9YmTgEHzNFJgtDPnfBW+ISLgBUbY6ntNedczuXeDDLYRltAjxEzJPY6QZ+tXVOZDUIcTG7nP0AgEZ+lQ834c37Yi54SNgokiMZOw65HU1aLrDEf2PN7ftQyknSZJJPinJ9R6UHzLmFziQkW11rILLGoiMAntU3OeVm3c0FB4jCgZc9sAnPp39a9A5f/s3v2bKkFTcYSwG3kJ3ximnKHGu1Cq3g83tcDeZPgeOpwT9JnvQ/DcKSZWYBy2dI9SBXpfG+zl22mt0JeY0rIER/T6bYqZOa8U0tbAsrbUSoGhY7xEE0kf/AExabC+NooHuj/8AUr9K1Xpf+LL38tr/AKf/AOaym9RACeP5RatIxjbMnqcjb1I2pUls9EO07dO9WIX0ZNbnwTOZBJ3jSRjacmoeJ4pCgYHBBIjrggT3BMfdUC6kIbin0oa6B1YVJ/Au2TtBOTnAnbzoK7wzCJ/flnyj60zSDbMe3a3IB+VRn3Y2X8K6WxNdDg5oUayH347VEbQc5VzO2gSBHl5+opnw/LJ3E/MA0+4TkNkgYIO/iAMSDiRG/etF0CStZBuUclBENAdGBV0kSpyA2xHxZHY42g2fgOWIA0gZIJMDxCDBMYBz07etbRFVQTEriZPp6n99qL4a4GnywdwM5rSm2KopBNjh1EnqZPz/AHNTKmO01xZuatoxifkD2qWdqm2Zm5EVue1cETW7duKncgYO9M/vyqC8vWYnE9gB0/feijUN0Yjt+FUTYsQPirmodYB0gDz6+XqexoHilQqdJnETvt2+dGXXJ28IETH10/fSa7xSqWOTpgaIgrM6RjeQZ6AeVUTseqEfEcGtpWa4SGcwoWZJYDfHhzgapiarnLbh99JsMCGgFmDHHTWAT2wT+lXi7xXvISCpEEgEqASPhkb/ANNLeK5aAxYLEHrMZkk5IJJJA6/o17Ecb0Vvh+KHv2K2iDqgtli3QnGVHTJ7UY/ENbuEe8LAydLMBA2kgkEj0MeVIOY8IFu6vd3wDnc6Qevx53z0EEVLzC2PjVEM6Q2p2ADhZhlUATGQS3eOtN5EzkarzD3TlCLbAgGfCAD0OBJ/AYycw25dcVvA25ByJ+eSSeu1Vu9x5thGa4FGwRRKkjEFgGMb4+8RTf2e4kXbwuEgahgmBgZwAfuOe1K9Dx2Ml/2cWbp1vcuEkzBaB5kGDOO2MVZuT8NxFq2tm0XHu5Ae40hxON5+6iuDvlbbHeBgktj6zA9KcWdgOg2PemUn8mljwK+H46+Eb+KsKdLRKbFe4B/WoLXE8DxQe2pAYYYMGET64PyNP5oe7wqNMqMiCRgkUJQjL3JP7+fzsVSrWCv/AOC+F/mH/Uf/AJVlN/8Acdn+U/WspPQ4/v8A5P8A6N3f7SKFeRpYN/lgGNLarjkrlhnSqgYBYiI2zUS80U3FFoFgw1aj4oXvOAEClY8Jn13V++Fs6GdVCKJZpe4ygiQEWWCzEzE77RWcY/DOii27LIQkLpU6QD7tSW+zidMedGjWWO5xxbUqk9oxsD8UecR8qBvcGxz9x/eTQh48LC6WNw7qX2UEEk+GJA+hgGJqXjeaogmCYGwIOcY+/wDY3XRVOzP4c7RUvuD0qv8AFe0N8CRbCDuw/WKE4T2gvl1l1MnYxBHaAD+FNTGL1wXDKD4juOuP33+VNwAmVDSYERI9TSPkwUhiLtt02gIoKxMqTA+/v5ipb/MhpZiCyKvhUrDalOACT4pIkY6fIzewNkvD8yOq4wDBFOTd8OkyRIkdcRHTzmin4u0NFrWWuMBBJO8QJiA2SMHcGc9U1jiRxCEFYFstrR1bw4gMP5vKDOelQNzGbCWuEte8Vemtt1M6Q0yCNwCcYEdmommXtL5TQCZJIBCgkDE5JnEA5O+KKa8MLIBPTr+9qonF88s8Ovu8i+0J7xhr0sScFsSAS2R5015VzFk4cFwzXGLxCwSAe3bby7YpHEfDLOLw6GY/Gu/fgRmqjytuIThbj3mgiWUFfEBJOQpyYwI3gbVJyXj9Vgkq+sy0P8ZG6sRAIxGDmN63U1JlpuXc9zUHFXiARMEzmJAH556SKQco5h7+2xJ0spwwyGHf/UDEY9KgHMFuObdwjGFJMFmI/l8ge9anZklgM5xxYXxXGK2lEl1bM5wVjbr9O2AuLuqzzpDWtOZGdZIklsmdIUQABjfsm4jiRbcI5F1ACNJ+AKAM4Ul2IaOgnGdq3duqbhuiWgAohONPdUWD38RmZxIqiVCuQdZ40ksttR4ZAChupznVkkySBnMbisKG6stbYeE+FgFOZB67nxZ28+tLOE50txnWADnUBqCqI+CdekuQRJ+hO9SIzANcbQNgtsOvYQJmOg9AIGKLBER8+se7gmLbGTuyjJmAsxJiTkfPNKOPvKIwWZl0n7RlYPwagCwlTIJMEdKsPNeCNyCwtXJPRymmAARi5LHVsAI6eZrPNihNxRaKEEMNYJEDwz3WQRuMxv2ZCtEvCXlVVPvdKkkadMSOuNUatiOxFWb2a4cs0uAuiNJgbHc9PpBkVUQmvTa1S0Bs7EkmfUQR9K9C9m7o4dV1kiZzIMyZM9dOdvL6LJjQRd7fAK9sLqKj/REYMxBBxIzFScTxFy2CT7tgO7FCB6ZE/MVFyfmKXkLJsDp+n7FV/wBv+P0IlsfaJJ+X/ej2xaA0WuzzFGXVqAB6nA+uxorVXkHJ+dOb1mzqOgHI6EEmZHpXpfBC0VHuzpAx4TjGMgyDQjLwwOKGWodxWUPpP/MH/Qv61qnsFHjacWnETaOmCBJBUkqDOWxInvpgxjvDfs3Q7Hh7TNcPi1gCEmB4FJHi0/aOwUAUM1lYazYtvZuNBcI3vQwE+AM0NbUdXMiZGYiuBbtNpt3Cj3ACo0DWVBBWC/bO8yDgKKFUYIWLilLs6tissNURAcwpYkzsYwT0MH8n4q4wINm2BiY1RHTJ+Ix1zNKuJ5ibY90q3LiqIhtWnP8ANcfMeSdvi6CTlPEe9a3ruBMkBEddBbMAgA9CNz+dBrA62NON5FdvybFtVAMEuFgnoZgkD7x2phyv2UvWYNy4qiIb3OoCf6sEfTqasHKOYkwrHUNoAAMeSjfzimnGOiL4Sc7QYgeY8u39yBeChX+JKWUJ95cBaMuScTk6Yz9MTvSx3N28V0tbRpUMGARx3bIdXnIYTvBA3J/MeKZRpsqLrnIWSCRIBIaIU5P6Ui4k2Ftm8IS4xZW1OGIOxX3q6ggJ7iM5GRU0hZnXH87tqxs5UM0BmEpcIxGr1wQ23U9KJXiRwyi46LLhtDWgphCBDSYBMY3yBsNqA5ely6feWyLaeI3AoDMezC5LL8liTmBJAV8Zxwu3v+Jc0rGn3V0bgCB8Yw09Rr/KqV4Eus/gc8pS5cuBUupdViCWBhgFOvxW2J8hKifFtEEZ7S81vkldGi0uJOhTIxIlxp9CprrhXe1w5uJZCfZCKAWIxPjzOwEyAB0mFFa4XjUDjW72+6e8t3kj+UqW1bHpRWXfwBulRcGLLwKDU5JlsW9XxTkqFg5zMQSZg7UJ7H8xRWcKBreQ06tRYmRn3aCTmcTnc1rnzWwttmdQ0SoYADJmQrQIGAOoGw2pRynnUXM3xI2QSfOC2hEHyHzmhuLDJ00HFjb4i4yWLmvU2p2ukIi6iB4m8HwgEL9kQKa824ZXAuK4QsMlULDY+EMNhjcKZgeVAc94Zrr2yt33TNsrltLADa2QRDz9knMEgjau+Av6AUuIbSsP/wDa4utjt/l5gb9/nWb0wea8EnCu3uyLmkpEreVlYajGELAz3+GTGAd6hs2rdsoypfZ2zJuAlmJJJM25YAZ6DInAJC/mHBEn3r8VcaIH+XBWWJ+FW/lKiQOoJjYTW198nurqEr0m46yPMgqbneQCvlW/0D7DO1zRdR08Q/h8RUFSDAOPeE6c+UDG4zWw73QWuFFfZVDbL/8AkVT4t5KnpuKVLy5EZzZQK40qBcZgqjbULk6bj4B0eE5zNS8HeBUOCHYkr7xg8biSDpk5jDQo84rMZfDGHMk0INUOx+EKp/Tt3/OqZdv3Llw68oIAE4BnA0zkyPu3NWwNd0EgBm/qRic9VkT32nHXrV+O4gBtLIbdwmTE7g4kEbb7dtszQQ7yS8oYBg5C6z0xtO46xEY6AU255x/w9ABP570p5PwF0nVc6TA9ep6T6V1zSz765C3UAUgEFskiJEfWtKIWsF9/2eceFtlDBcsHnaJ6HyETSv2+44XuIQWnFyRpwQQCScSO1VW7xBtW7ha6iKwggMDrA+xETB7Ci+R8xs3x71VdXRTgjw5xIPXrRd9BKzkYFLNgErPvI0lj54MdqtXsZe/4ayfiLEekx+INeb8xuO50KCST+FWPkHM7VsKLj6YwpBYGB5Df6daXjj5A2en6R/Mf+o1lUb/fg/5jfQf/ABrKHYp1KRzEC8FRWua3CkWi4RLkqDghcv5Nv0PSla3fdg27dtdYyfGSLYIIJd9QUtBgRhehJongeJtuyygOwl21NKjG0AbTmTWc449f5E1BjrBaBqOQ8aclhJ1Azg5zVk/5SW8nFu810KGC3lXDK4IxuGtvh1kAjsdMkZqWxYsowNpiQTLLKm4oOJjbQN5iepA2pbwHFwW8NvxAgkFm6SPiZs6gPX8erFki4rKy69QOgECOs48W3Tp3NFrwZHrHs/xDgf5ZaftRj5nOB5U/4vg9KlyS5jLR07DeAPr671VfZrjAN7kLOQIGRjM4B67dwD0p9zP2qsqui1NxvSBiPQx6UkYORRyoq/tBfD6Q7lAzRpDEAziJAzMeR84wVPF8OVJRiFUSoTQgDATjUVKquTGCxz4T8VMOa8YbhLMQjHOpZ1KPtEYwYwI28qSWLN9ma69+5atAxqtsddwnZEX+bzOB12wqVMEiW69yzaJWyto3fDCW1+Fd2aAdQOB4ieu21KLNm64lHa0o3ZHbQc7e7nDf0EjyAyJfariS/ulRSNKEgvdJYEsQfGzeISu+3aBioOQtde4FPEzHiYhRcCIN2LuIA6eHVJIAyaeOrJyq6LHze+1i3Z4cXCHKFtbnVLSDDbwpkiR8JAM7yq5XZLNrv2RdKmVkXzLdAS4MruSPhAXqSIYe1fMld10W7dxsjTcAJbTBIU/CLgkEiMzjaCk4fjXJGrwDEW0KBz6hFXSv9QJ7DrQj7QyassXP+FYwzEMCq6g5UANk6oJ+POBIAzMjBr3CcxFpggt6gRAL3LJ+5FMfNjTf2nZw9tNLBRaQTaMOrxLae4BJBVsYGQYNV5zxFp88QpXu9wHB6FGlwfKPrWh7QT3guNy7cu2Qqt7q62F8LaTuAnhIZS2nEEgnEZFV+xaNok3DbuGfEbIDtq6y2kle3iIJ8tqecm48PbcKQdFsthSoIUEkKBJmAzSFnG1V7nnNivjWwVtEyXs3bZTWd/F7ktbYknBKnyoQV4DKmrbH54vVbBDe6YjBIUmCdIBc4WT128QmN6TAlWLXRxBZSdStpUBu0KPEwO8QvdulZyjmSXLs+KNJ1Fzq8KrG0CRsM1Fz/mfELc0G7aRlAKsEIJQzpIZg/oCGWII6QDH9Jtq2NCBdgm2yyI95bAN1CPONJGxjw4PxDeoDy9rVxPfXfeEltDknSQSereItESvT76B5beuEhLrFmuSJNwnT2yG1TIJMeVYvAANBDgalLJqJgg7kmZEdRnvFb7B3ksK5twW8JzgR1nGSRUAKriJ9c/ea3xd4jqI7Z/EbGo+UWVuXlDMFUmSSYx2nudqRWdCpIVc09oI1Jb3GC3b0HWqpdsM06SCfWD9/WvXvaP2HTiBqtRbfoY8JHn1PqKpHMvYPjbc6QjjyJ/AiuqDikc3I3JlL/hXk+CT9KvfA+0NtrItsPdEKBgSvTMDbvVbc3bJi4jL0yJH6j5VwyqdvD94/UffTTiprIkW4lqt2UksvEW2JjcxH3mgOO4y1wxDK4uFj4rYacbyGE6fSqze4VyOhHkZ+Z7fOuRwBGWxSR4UnsZ8n2LT/AIp4f+S79V/Wsqq+6Hc/dWUfRgD1ZDGxxrC4vwgLJ+BAQIJOw8MiR3zTBeFRrSm58YB07/DnwmM9CR2yKTvfZM+H5IFP/wCoI/eaY8uH/DDEmRJC4zJ2IOIMbeQpJLyaOwG4fEPEdK5ChGA7zmM+e5ptahgjHVJiWEYjoROJEZg0r4hdQ8Ab3ecBgAI7kTq9cn0o/grngBXYYjec/h/ahPQ8Fks/DX8zliBtn0HmAB+VZw93WQhmJnSM+Ikz6ClnLeZEE+FexBgj7j/ekPMuYOWOtsjGkYA8vSqcclQZl0/ibStGsY3gzHTvvJAjuaD5nxN93T3SW8CEDZ0DYwDIk4BIydtqrnJeJL3FUTpGT8v3FWJ7xJIAlgMQqlgTtGMEGD8qhPEh1lA3P+Gm4utmlVg3TCgwzCfqDAGSI3rOXcwsQLKq1xZ1XGdVUPoMgsRkIDsCJk9yBWuecIRbQFjc04YyNYMkk+QyFz0UGoeU3U97bVrYCi4jQpJOGHiJHhOJ647Vl7SbxIl9q7aLddGIIZtQGqCGEqYBGxg5J+yO1LeXcZZRlEXCJEguQu+dmM0y9r7KMVLSjlQx6gEhdS7TIkfMttFI+WLDCSAoOW7DuTMDHTJ8qaHtFl7i5864ktwy3GRHZjcLIwxChHhTMhtNzV1wG8qpl2/abFuyFPaC336h+FXi/wAaH4IOiaoukquRMqAJ7SEgTIyveqFxIts3gNyOisqx9QR+FDixYeTNFx9k2CaWODrXBgTpDSIknY5B6GlnH2LVi6ypd0MCy51KTBIPjnSwxsZHptUPIIzreSYVQN1nJzsAFB8oNT+0S2l4i5ALB295pZwFbWNWoSIB8XcNQSqYF7RfwrABydKzCyGtkQTqJAtgD7IED+anvMuOtKvu3BAUeC4MwSDviQGZdJjqJGdVVawgF1SVNtQQYJmYMws7/h51Y+YXT7tWtqZUkTnxZhvHGxOmD5HaKMl9SNDyKOVtF1HCtMiNUAHue5gTmn/CWZusZkoSCZIE99HRsj1maScr4Mm5LC4pkTqbUYkfagY+e3rVkZRpOmJByPKM9ZnT3pZvI/GgPjeYxhWBxiCT8tpHUT6UHw99mnoOtJ7763JzvuVA+e5maZcGvSqKCSG7Nlq5T7S3eHAAOtB9hu3kdx+8VbeS+1vDcR4TNp/5XiD6NsfnFec+6n0ouxaA2FEQ9L5jyazdEOgM9xXnHOv9nN0MTwxDJn4jBHlMZFNOXc3u2oAYlf5WyPp0+VWzl/tFbbDg2z33X+1BNoLVni3H+zfG2DLWTA6qZP3Utuca0EFc+Yz8z1+dfSBS3cE4IPUZFVX2l9mLDqzC2C8GIwSYplyVsXp8Hhv8Z/p/Gsqxf4c4j/6dv+isqvdCdWIr7MMsFHpmfmSQKN5Dc1awdyAVEYEEZjt+lA8WqEyLhY/6vF+n51Nya8ZYLtEEnrJ69hAIA86nL2jR9xLzK4olnEsDBALR6xP7863wl+E2gbQPr37k11xBYCFbUOjMTOmSIMCZU4ye/agbnEt1YEZpUrVD6dhfBXh70iTt3/KKzmnCq1wsWjAkelZyq1u+0/gKh4pFdpaTHQT99Mtha+nIy9n/AHQuQh8Wn7sUw4q46usGFJEycQOgXqT6dDSblwCOCqhfxq1XOCF1MHJG/UHvUuTY8NHAtqU0Rk6rhgQZZWjJgExGCPtUv4BxauaRAOQAx0gmIyAJAz3PzqSz7y27a5AAUFi32QBOkAYOI2nNduquQwTWcP4sBcK0xvHr222qadMLjYfzwte4d3UJchyy4DSmplMRseuOx61UuEvExpAtgdSdX/SrHf7u5q6cM5KopUS5KwHMBUDHVBMkeLYTuMkZqp8RwrK5D3NOnHjVQ58lukZ9enam42soTki8MtnA3Lr8PdAwwKtBcHuNJI2IURjafKTU+bWbxJcSw6jwtt2OQfxmdxmrB7OKQ2lp0MCD4hBLAgJMks2SSZknyC0k5xy5S0kOhEjWpDA5iGAjOMN1ETJBjRaUmgSi3Eg5VcRSREtOcyqqYmYA8RMAAEztiasHPU1BX93AgAeANiNIMGJ2PXbTgk4R8sTxgK3hBBYx4jHSdp6SBgT5mnfNDNtVhjufOGIJHQwCVwIOCKMvcgRjhlctcO4uqW0PnwhRAB7sIBAHp0+rzjPg0a9QjRAAwY1Lg4kiREdenUHgLAF34SAMkmPEewz8XquwPqSOM4gDLTORvAOliR9zD9a0nbDGNII5foRYhQZBxP3/APamPKnLgEx6jqO+wpJwStdLAEm3jPmrTEd4nINWOyotoT2H7FCslEVK1wwG2BOBRvD2jOK7VZM1MoqtiUFW2xkVJ/EKBQ1zifsrk0n4R+J96VuLKd/LyNZIUsXDcUGyKZC5iSYFKrJAHSakuOep6UjkOoli9mePduJREJVIYt5gA/nFXiB1+tUj2L4fSz3WwICqT1kyfwH31a34obDetHQsnkL90v7FZQmf5vvNZRoFnzfxFxyDCIR1a2d/XIM/1TXPL2g9gM+pkb+QzWXGk5JH/hEfqK6Xh2JgEkxtmc4/Cq+KErJ3cvSBMypPYY+nkKk4XhBcIMEL59aO4TlJiX+lT37gUQKW60WjC8sg4pgogUJbcRvFC8Vxcny/GhxdnaTRUQTkroYm+BVg9necrIQnPSev96p5n0qITRcE0LGbiz2T+Ct31hgCD0NLuM9kbgOpGLZnScCYgbdo8qr/ALM+0LKAH8UYJ6/3r0PlPO0cABgfLY/SuSScWdsVGaKvbFyxrLWzbFtScrCksYHi6wJPyyaRcwYXIdWIBOl1BMalgAz0ldMnaR6z60t1Hmdto/OouI5Rw1wZRPkBU1OndDS4bVWeZcM622RsggwuqPmVxtmNR8+51DcffUXLwaSut1YNBA8RzH8pAB+XQ5PofE+x/DO2rSZ76m27bx5VC/slYZmuEGWLEjUYyc/r5Uy5FdiPhdUebcKwtoxVgQRChZAGN8+In1mPPMmc7vIxNp2jSZUxP8ykEdR3H6Qbr/hHhh8S4EwJPrnNTHldlTq0rqJJ2E586fum7E9FpUefcHwd1hABYYg9IkbHtE46U44fkrNJuRBMlOkmJ33Eg9t6sd3iEXYfSgbnFT5UXMy46OrdlUGABFKeY8eH8K/COvc/pUPNuMJbQDgb+Z7fKgrVPFeRZfAWhFS6JqK0tTG50G5otk6OhZAyTXOsd4Hc1q4u01vhuWXL7BV269gPM/lSdrwh+qWWSWxqI0HAxIzJ8u9CcRxLfxI4ZRDalViehaPvyKvvKOTW7Cj7TAZY/l2rz/2QPvuYPe3Gp3HpJ0/itUjxrbJS5L0ewWlAAA2AgfKsFkDIFCW+IjeuzxoiaYmE/L7/AO1ZQn8Wf5W+lboBPG+D9nsDWY8h+v6RTArbtCABQXFc3848utK73HMdseZ3pcs6FFIYcZx/y8utI+L4gt5DtWMaC4i70FUjEE5UjYUHNSLc7ZqBEJo7h7Hz/CnboglZwiTuR6CpGskiIgUZoAySBQ9/jOw+ZpbbHqjiw/ujPTrVm5bxKuAQf3+tVK2hbLGiOHuMhlMfgaScbKcc3H+h6Hw3F3V+Fz88/jRtvnN0bhT6SKp/LufjZxpP3fWn9jjUYbg1yyi0dcZp6Gw543VD8m/tWjzo58LRPegfDXJApRmwm7zYnZT82/tQ78a52gVwyioL/EoglmA9f0ois7JJ3NB8fxwtjSuXP3eZoHi+dFsWxH+o7/IfrQdjhmbO/cmqx4/LIyn4RIqHrmjLFonYVLw/CgQSPmfyFEhxO2OlNKaQiRx7qBJz+FcWRGTua64ltgKW8dxLKfhIBGGyPpMRWjCXIzOSgsjXg0W6+mQI3E5I8qtPC8StpQoSFH8ufu3rza0dRUIAkdcxP/tJznPSn/Ac7uWzpu+IDwkggkHz74M966lwqOtnLLkb3os/PubaOFvOs/AQJBBBbwjfzIqvf7L+F8Nx9tlH4n8Fof2z5gG4UaW1e8cDBxC+I46ZA3pz7FL7vhUPViWP4D7gKV4QC4+7HWuGsxkT+npXFi/Nae6NWRsN/WcUKszZv3n9X1H61lce98vvrKATwkGtM1Qtdoe5cJ2oqJZzSJrt7oK4W1W7SUVbt02ie9mWrNFop6V3Ys4og28VNsdIAu8PqySTXa8IDuKI93BmpraTtQsZIEa3sB1/Cuja7CmFvhhPfzqYcJ2FL2G6ia5a8q5tcIwyrEHyMU+XgqItctmh3D0E9q5xA2cn1ANSfxvFbav/AEirJZ5f5UUnLgelTc18D0/kqB9+3xXG9Bj8K0vK2mYP51eU4JF6CaFvupJVem57UfUA4Fd4fgIOR8qcWbKqO5+4Vu9pVTGB1PU0IHxSubZlEk4i/wCIjvH3UG18K3cxt5EgSY2AmuePt3NM2yuodD28uxquW7rByQSrdZ3U/mPKrcfDeWTnypYQ/Xjyw8JX3gO+SMH7pGKl4S6wRjf+HTAVsnrnBpP79RBA1PJ32acmCsQZE571nFX2KAEtIE6T9k5+cV1KK8EHI7LBWDLOdx3zAj5fga6s8YBq0+EHLTBBGxweooRLe2t8bDy8z60UttYAMEEyCcfOZ29apgkrB+ZsjOgUkiJOOv1M1buU87hFQQpUBRq+ExHXcGqSW/4hIEQcDtmrD7NWhdum48nSNcTvAMKw2ORPepOstjywsFyu8wVDquME7Sd/QbxXd7m1tVQ+8gP9sicbjHzqi8VxUyWBZyCST0E9J9du1RLxT3PAWGkacx8I2x571FPDC0ei/wC9uH/59ZXn38Vw/wDK3/Uf1rKGTf3KolmplsUUtmp7dqn7D9QW3Yom3ZqYW+1T27dK5DKJlq3UwtmprVv60Tbs96RsokArw09KIXhaZWLE0bZ4QUjmFIWWeDo+1wgo1eHo2xw0ZP0qTk2OkLrPLusY7Ufb4QCp24hVoY8dOw+tCxqJ/dqu9QXr4Hl+dAX+PJwok99xUUkZY6jWM3R3dcnLHSvbqaWcRxYmFwJgfv1rrjeIkgfX9KT8TxIU4yT9P7mnjBywgXSthPMOMAEsYWJxufT9aS3uLe5BUwo2GY658zTrhby3QwZYMZO49aUWeX2hcKM5CqRBO7N2HkK6uPjUdnNObloL4LhlvNmQ2nLQCr+YPTzrnjOV+9BNvFy3IJMiY2xnpRKW9KtbUC3nHiMNH3A5FF8vCLhwFYHqRP3VSyZVrXGEA23ESe3UdaKswXGticYI+Jc7juMUz5zetXCEKMwXJIxjy70n4u2tpgUbWhz5r60wNBZOpZA1KJBYgSAp3IB2jrUd1ioDEAkgmSMqBtA6D9K091SA9uVPVV+16Hoaj5pxUJpAIkCQSPqIOPPFFMVoC4S8ctOT+Zirb7KymonfV+H/AHqt8u4MMmrVEHby7+dWHkYgEf6jU+R/QBom5zyzSdQBNs4BH2SZw3l2PWfKkTXAmpWYhWET9oQcHTORgfWvQeDuYg5BwQdjUPE+zVm5JQm2SNviX5AmR8jXOp/Iyl4Z5/8A7pX/AJq/Q/pWVeP8H/8A3Lf/AJf961TeoGo/JVhanpW/dAVJW0WhZ0UcKlTolbVaIt25oNhObIo/h7c1nDcP3o+0lI2azrh7NHogAoU3AKHfiz0wO9DBg+5xKrv9OtDvzDBJwB0G/wBaXe8G+/mdv71A1+AZgmflv2/fzpWPEKfi/tkafX8AKge+XnPh+7/vQBuSZbPl+9qy3c1Tq+EbDoT+dKUDU4kAHSMDE+v7/vQ3MOYBckwBienoO5qN7h06Rv2OMfvoKQc5sOGlmmdsbDtVuLi7PJHkn10S3ucMSdKjT55J9aKtcaLuMSBJUjtvFIPeHToCjJnUTkCc/KKM5QSLqxGe/Y+XeK7OiSwcvdt5G7cLgFSIYTuY2qG7aS42lSUdSAf5SQMf9/KuOJ5g8nTAUYCnpBO46E9pqfgQNckCSJXA267bRjEnelyhznQLAKkLddoOkzAAByTByaB4rm5cK50iTBAG2Os+oofjLmq4YYq5Y4E5APXzii7furOAmpgIJjvuM+UfWnRNs5fmC3JLKvhxqUwSI6Cmp5mi21UWiG+yrRmetLXuh1hbILaYiBAH5b7UIGAwwIvSCCYgZx6AfnWqzLBLxXCsjM09sAYJO4jyjfzoTiWD5G/UUTZu6WzDGT4iTgidvLyrTrJAImZzBBid+1agWcW7Hhwcx0mT+VMfZ3iTrYMc4+7B/KuLeJxB7jYjr6daC92bZDqR4TjP3H5UJLsqAeg8LcppYvVUOU83R4Ew3VT+Xentriq4pJrDMOvf1lKf4wVlKEp9SJWVlVOwJWjeE/Ot1lIwB43rv7XyrKygwEPEfEKB5jsPUVlZQWxkbvbUMenrWVlLIeBDZ3b51FwH+WPQ/nWqyj4GeztvgX5ULz/4Pmv41lZXZHZyvRXrn5N+NGcu/wA5P6h+dZWVeWjnjsL5t/mN6/8AsaiOU/5z/wBK/gKysqb9pVbA1/zF/qNE2Pt/1fktZWUWLDZrlOzerfjSqz8bf/mH4it1lFeQS2grmX+b/wCL8jRHC/kfxFZWUy0TezhPtetQXvhX+o/hWVlKMtAvC/CP6z+Bq0WNj++grdZUuUKI6ysrKmOf/9k='
            },
            // {marked: false, name: 'молочай', category: 'кактусы', img: ''},
            // {marked: false, name: 'сансевиерия ханни', category: 'кактусы', img: ''},
            // {marked: false, name: 'тигровое алоэ', category: 'кактусы', img: ''},
            // {marked: false, name: 'сансевиерия ханни голд', category: 'кактусы', img: ''},
            // {marked: false, name: 'кактус', category: 'кактусы', img: ''}
        ],
        visible: false,
        appTitle: 'Кактусы и суккуленты:'
    }

    handleMarked(name) {
        // копия массива
        const cards = this.state.cards.concat()
        // поиск карточки
        const card = cards.find(c => c.name === name)
        card.marked = !card.marked

        this.setState({cards})
    }

    buttonHandler() {
        this.setState({visible: !this.state.visible})

    }

    // метод render складыв все необход в шаблоны
    // дополнительный метод для вывода цикла
    renderCards() {
        if (!this.state.visible) {
            return null
        }

        return this.state.cards.map(card => {
            return (
                <Card
                    card={card}
                    key={card.name + Math.random()}
                    onMark={this.handleMarked.bind(this, card.name)}
                />
            )
        })
    }

    // titleChangeHandler(title){
    //     if(title.trim() === ''){
    //         return
    //     }
    //  this.setState({
    //      appTitle: title
    //  })
    // }

    render() {
        const style = {
            marginBottom: 20
        }
        // обязательно что-то возвращать return
        return (
            <div className="cactus">
                <h3>{this.state.appTitle}</h3>
                <button
                    onClick={() => this.buttonHandler()}
                    style={style}
                >Открыть каталог
                </button>

                {/*<input*/}
                {/*type="text"*/}
                {/*placeholder="Change title"*/}
                {/*// функция для изменения названия title*/}
                {/*onChange={(event) => this.titleChangeHandler(event.target.value)}*/}
                {/*value={this.state.appTitle}*/}
                {/*/>*/}

                <div className="list">
                    {/**/}
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}


// ReactDOM.render(app, document.getElementById('root'))
// ReactDOM.render(<App/>, document.getElementById('root'))
export default Cactus;
