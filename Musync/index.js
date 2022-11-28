// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
// var obj;
// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(JSON.parse(this.responseText));
//         obj = JSON.parse(this.responseText);
//         const{
//             albums
//         }=obj;
//         const{
//             name,
//             images
//         } = albums[0];
//         console.log(name);
//         console.log(images);
//         const{
//             url
//         }=images[0];
//         console.log(url);
//         var s = ``;
//         // var album = obj.albums[0];
//         //     var img = album.image[0];
//         //     console.log(img);
//         //     var nam = album.name
//         //     console.log(nam);
//         s = `<div class = "albumcard"><img class="albumimg" src="${url}" alt="album_img"><br>${name}</div>`
        
//         document.getElementById("albums").innerHTML = s;
// 	}
// });

// xhr.open("GET", "https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv");
// xhr.setRequestHeader("X-RapidAPI-Key", "ae34868242msh14e629125b199e3p1aab16jsne76c378dc57f");
// xhr.setRequestHeader("X-RapidAPI-Host", "spotify23.p.rapidapi.com");

// xhr.send(data);

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(JSON.parse(this.responseText));
        obj = JSON.parse(this.responseText);
        
        const{
            data
        }=obj;
        const{
            artist
        }=data;
        const{
            discography
        }=artist;
        const{
            albums
        }=discography;
        const{
            items
        }=albums;
        var s = ``;
        items.forEach(album => {
            const{
                releases
            }=album;
            const{
                items
            }=releases;
            const{
                name,
                coverArt
            }=items[0];
            console.log(name)
            const{
                sources
            }=coverArt;
            const{
                url
            }=sources[0];
            console.log(url);
            s = s + `<div class = "albumcard col-4"><img class="albumimg" src="${url}" alt="album_img"><br>${name}</div>`
        });
        // console.log(items);
        document.getElementById("albums").innerHTML = s;
	}
});

xhr.open("GET", "https://spotify23.p.rapidapi.com/artist_albums/?id=2w9zwq3AktTeYYMuhMjju8&offset=0&limit=100");
xhr.setRequestHeader("X-RapidAPI-Key", "ae34868242msh14e629125b199e3p1aab16jsne76c378dc57f");
xhr.setRequestHeader("X-RapidAPI-Host", "spotify23.p.rapidapi.com");

xhr.send(data);